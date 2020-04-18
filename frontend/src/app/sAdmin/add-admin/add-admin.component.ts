import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {

  subscribers:any = [];
  private baseURL = "/api";
  constructor(private http: HttpClient) { }

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
    console.log(adminForm.value)
    var token = window.localStorage.getItem('tokenID')
    var header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    }
    this.http.post(this.baseURL + '/superAdmin/addAdmin',adminForm.value, header).subscribe()
  }
}
