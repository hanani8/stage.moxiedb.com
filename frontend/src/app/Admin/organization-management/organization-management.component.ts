import { Component, OnInit } from '@angular/core';

import { AdminsService } from 'src/app/services/admin/admins.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-organization-management',
  templateUrl: './organization-management.component.html',
  styleUrls: ['./organization-management.component.css']
})
export class OrganizationManagementComponent implements OnInit {

  public search:any = '';
customers:any = [];
private _url = "/api"


 
 

  data: any;
  cus: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    var token = window.localStorage.getItem('tokenID');
    var header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    };
    this.http.get(this._url + '/admin/customerOrgs', header).subscribe((data) => {this.customers = data},(error) => {
    console.error(error)
    })
  }


  toUpdate(customer){
    this.cus = customer;
  }

  deleteCustomer(_id) {
    this.data = _id;
    console.log(this.data)
  }



  finalDelete() {
    var token = window.localStorage.getItem('tokenID');
    var header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    };
    this.http.delete(this._url + '/customerOrgs/' + this.data, header).subscribe((data) => {
      console.log(this.data)
      this.ngOnInit()
    },(error) => {
    console.error(error)
    })
  }
}
