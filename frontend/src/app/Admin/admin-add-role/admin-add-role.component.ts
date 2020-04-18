import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DualListComponent } from 'angular-dual-listbox';

@Component({
  selector: 'app-admin-add-role',
  templateUrl: './admin-add-role.component.html',
  styleUrls: ['./admin-add-role.component.css']
})
export class AdminAddRoleComponent implements OnInit {

  organizations: any = [];
  organization: any;
  private _url = "/api";

  //To Add Filter
  filter = true;
  format: any = DualListComponent.DEFAULT_FORMAT;
  //Master Array
  sourceUsers: any = [];

  users: any = [];
  //Child Array
  targetUsers: any = [];
  sourceProducts: any = [];
  targetProducts: any = [];
  displayOrg: boolean;
  displaytable: boolean;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    var token = window.localStorage.getItem('tokenID');
    var header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    }
    this.http.get(this._url + '/admin/customerOrgsForAddRole', header).subscribe((data) => {this.organizations = data},(error) => {
    console.error(error)
    });
    this.http.get(this._url + '/admin/customerOrgForAddRole', header).subscribe((data) => {this.organization = data},(error) => {
    console.error(error)
    });
    this.http.get(this._url + '/admin/addRoleProducts', header).subscribe((data) => {this.sourceProducts = data},(error) => {
    console.error(error)
    });
    this.http.get(this._url + '/admin/accesscontrolusers', header).subscribe((data) => {
      this.users = data;
      for (let user of this.users) {
        this.sourceUsers.push(user.name)
    }},(error) => {
    console.error(error)
    });




  }

  funk(event: any) {
    // console.log(event.target.value)
    if (event.target.value == 'iuser') {
      this.displayOrg = true
      this.displaytable = true
    } else if (event.target.value == 'xuser') {
      this.displayOrg = false
      this.displaytable = false
    }

  }


  onSubmit(roleForm) {
    console.log(roleForm.value);
    roleForm.value.users = this.targetUsers;
    roleForm.value.products = this.targetProducts;
    var token = window.localStorage.getItem('tokenID');
    var header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    }
this.http.post(this._url + '/admin/addRole', roleForm.value ,header).subscribe((error) => {
    console.error(error)
    });

  }

}
