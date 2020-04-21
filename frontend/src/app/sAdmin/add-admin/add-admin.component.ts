import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as AWS from 'aws-sdk';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {

  subscribers:any = [];
  private baseURL = "/api";
  constructor(private http: HttpClient) { }

  AWS.config.apiVersions = {
  cognitoidentityserviceprovider: '2016-04-18',
  // other service API versions
};

var cognitoserviceidentityprovider = new AWS.CognitoIdentityServiceProvider();

  ngOnInit(){
   var token = window.localStorage.getItem('tokenID')
    var header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    }
    this.http.get(this.baseURL + '/superAdmin/subscriberOrgs', header).subscribe(subscriber => {
      this.subscribers = subscriber['data'];
    })
  }


  onSubmit(adminForm){
  var params = {
  UserPoolId: 'us-east-2_hKGBBXcu3'
  Username: adminForm.name,
  DesiredDeliveryMediums: [
       "EMAIL"
  ],
  ForceAliasCreation: false,
  MessageAction: "RESEND",
  TemporaryPassword: adminForm.tempPass,
  UserAttributes: [
    {
      Name: 'email', /* required */
      Value: adminForm.email
    },
    {
    Name: 'custom:role',
    Value: 'admin'
    }
   ]
  };

  cognitoidentityserviceprovider.adminCreateUser(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
  });

    console.log(adminForm.value)
    var token = window.localStorage.getItem('tokenID')
    var header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    }
    this.http.post(this.baseURL + '/superAdmin/addAdmin',adminForm.value, header).subscribe()
  }
}
