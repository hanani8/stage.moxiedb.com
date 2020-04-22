import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as AWS from 'aws-sdk';
AWS.config.update({region:'us-east-2',secretAccessKey: 'Bk3UhOP0Okei2Y9kbwQgobpCdlB4hLRtpfjACU+6',
accessKeyId: 'AKIA4SAVCJANYHGMDTPZ'});


@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {

  subscribers: any = [];
  private baseURL = "/api";
  constructor(private http: HttpClient) { }



  cognitoserviceidentityprovider = new AWS.CognitoIdentityServiceProvider( { apiVersion: '2016-04-18'});

  ngOnInit() {
    var token = window.localStorage.getItem('tokenID')
    var header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    }
    this.http.get(this.baseURL + '/superAdmin/subscriberOrgs', header).subscribe(subscriber => {
      this.subscribers = subscriber['data'];
    })
  }


  onSubmit(adminForm) {
    var params = {
      UserPoolId: 'us-east-2_hKGBBXcu3',
      Username: adminForm.value.name,
      DesiredDeliveryMediums: [
        "EMAIL"
      ],
      ForceAliasCreation: false,
      // MessageAction: "RESEND",
      TemporaryPassword: adminForm.value.tempPass,
      UserAttributes: [
        {
          Name: 'email', /* required */
          Value: adminForm.value.email
        },
        {
          Name: 'custom:role',
          Value: 'admin'
        }
      ]
    };

    this.cognitoserviceidentityprovider.adminCreateUser(params, function (err, data) {
      if (err) console.log(err, err.stack); // an error occurred
      else console.log(data);           // successful response
    });

    console.log(adminForm.value)
    var token = window.localStorage.getItem('tokenID')
    var header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    }
    this.http.post(this.baseURL + '/superAdmin/addAdmin', adminForm.value, header).subscribe()
  }
}
