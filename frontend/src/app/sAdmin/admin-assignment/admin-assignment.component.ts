import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Admin } from 'src/app/model/admins';

// import { AdminsService } from 'src/app/services/admins.service';


import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-assignment',
  templateUrl: './admin-assignment.component.html',
  styleUrls: ['./admin-assignment.component.css']
})
export class AdminAssignmentComponent implements OnInit {

  public search:any = '';
  admins:any = []; 
  private baseURL = "/api"

 
  data: any;
  adDetail: any = [];


  constructor(private http: HttpClient) { }

  ngOnInit() {
    var token = window.localStorage.getItem('tokenID')
    var header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    }
    this.http.get(this.baseURL + '/superAdmin/subscriberOrgs', header).subscribe(admin => {
      this.admins = admin['data'];
    })


  }


  toUpdate(admin){
    this.adDetail = admin
  }



  deleteAdmin(_id) {
    this.data = _id
  }

  finalDelete() {
    var token = window.localStorage.getItem('tokenID')
    var header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    }
    this.http.delete(this.baseURL + '/superAdmin/subscriberOrgs/admin/' + this.data, header).subscribe(admin => {
      console.log(this.data)
      this.ngOnInit()
    })
  }

}
