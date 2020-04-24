import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DualListComponent } from 'angular-dual-listbox';


@Component({
  selector: 'app-role-management',
  templateUrl: './role-management.component.html',
  styleUrls: ['./role-management.component.css']
})
export class RoleManagementComponent implements OnInit {


  roles: any = [];
  private url = "/api"


  public searchField: any = '';
  users: any = [];
  filter = true;
  format: any = DualListComponent.DEFAULT_FORMAT;
  //Master Array
  source: any = [];
  //Child Array
  confirmed: any = [];
  private confirmedStations: Array<any> = [];
  private sourceStations: Array<any> = [];
  stations: any = [];
  exists: any = [];
  userExists: any = [];


  userStations: any = [];


  data: any;
  roll: any = [];
  // editUsers: any = [];


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    var token = window.localStorage.getItem('tokenID');
    var header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    };
    this.http.get(this.url + '/admin/roles', header).subscribe((data) => { this.roles = data }, (error) => {
      console.error(error)

    })
    this.http.get(this.url + '/admin/addRoleProducts', header).subscribe((data) => { this.stations = data }, (error) => {
      console.error(error)
    });
    this.http.get(this.url + '/admin/accesscontrolusers', header).subscribe((data) => {
      this.users = data;
      for (let user of this.users) {
        this.userStations.push(user.name)
      }
    });
  }


  private prepareStation() {
    this.confirmedStations = new Array<any>();
    this.sourceStations = new Array<any>();

    for (let i = 0; i < this.stations.length; i++) {
      for (let j = 0; j < this.exists.length; j++) {
        if (this.exists[j] == this.stations[i]) {
          this.confirmedStations.push(this.exists[j])
        } else {
          this.sourceStations.push(this.stations[i])
        }
      }
    }
    this.source = this.sourceStations;
    this.confirmed = this.confirmedStations;
  }



  private prepareUserStations() {
    // this.userExists = JSON.parse(JSON.stringify(this.userStations));

    this.confirmedStations = new Array<any>();
    this.sourceStations = new Array<any>();
    // console.log(JSON.stringify(this.userExists[0]))
    // console.log(JSON.stringify(this.userStations[0]))
    for (let i = 0; i < this.userStations.length; i++) {
      for (let j = 0; j < this.userExists.length; j++) {
        if (this.userExists[j] !== this.userStations[i]) {
          this.sourceStations.push(this.userStations[i])
        }
      }
    }

    this.source = this.sourceStations;
    this.confirmed = this.userExists;
  }



  toUpdate(role) {
    this.roll = role;
    if (this.roll.role == 'iuser') {
      this.exists = this.roll.products
      this.prepareStation()
    } else if (this.roll.role == 'xuser') {
      this.userExists = this.roll.users;
      console.log(this.userExists)
      // console.log(this.userStations)
      this.prepareUserStations()
    }

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
    }, (error) => {
      console.error(error)
    })
  }
}
