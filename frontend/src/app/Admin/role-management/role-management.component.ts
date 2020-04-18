import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DualListComponent } from 'angular-dual-listbox';


@Component({
  selector: 'app-role-management',
  templateUrl: './role-management.component.html',
  styleUrls: ['./role-management.component.css']
})
export class RoleManagementComponent implements OnInit {


roles:any = [];
private url = "/api"


  public search: any = '';

  filter = true;
  format: any = DualListComponent.DEFAULT_FORMAT;
  //Master Array
  sourceUsers: any = [];

  users: any = [];
  //Child Array
  targetUsers: any = [];
  sourceProduct: any = [];
  targetProducts: any = [];

  data: any;
  roll: any = [];
  editUsers: any = [];


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    var token = window.localStorage.getItem('tokenID');
    var header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    };
    this.http.get(this.url + '/admin/roles', header).subscribe((data) => {this.roles = data},(error) => {
    console.error(error)
    })
  }


  toUpdate(role) {
    this.roll = role
    this.editUsers = role.products
    this.sourceProduct = role.products
    console.log(role.products)
  }


  deleteRole(_id) {
    this.data = _id
    console.log(this.data)
  }

  finalDelete() {
    var token = window.localStorage.getItem('tokenID');
    var header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    };
    this.http.delete(this.url + '/roles/' + this.data, header).subscribe((data) => {
      console.log(this.data)
      this.ngOnInit()
    },(error) => {
    console.error(error)
    })
  }
}
