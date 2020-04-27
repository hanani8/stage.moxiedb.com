import { Component, OnInit } from '@angular/core';

import { AdminsService } from 'src/app/services/admin/admins.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DualListComponent } from 'angular-dual-listbox';
import { exists } from 'fs';


@Component({
  selector: 'app-organization-management',
  templateUrl: './organization-management.component.html',
  styleUrls: ['./organization-management.component.css']
})
export class OrganizationManagementComponent implements OnInit {

  public searchField: any = '';
  customers: any = [];
  private _url = "/api"


  data: any;
  cus: any = [];
  exists: any = [];
  constructor(private http: HttpClient) { }
  filter = true;
  format: any = DualListComponent.DEFAULT_FORMAT;
  //Master Array
  source: any = [];
  //Child Array
  confirmed: any = [];
  private confirmedStations: Array<any>;
  private sourceStations: Array<any> = [];
  stations: any = [];

  ngOnInit() {
    var token = window.localStorage.getItem('tokenID');
    var header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    };
    this.http.get(this._url + '/admin/customerOrgs', header).subscribe((data) => { this.customers = data }, (error) => {
      console.error(error)

    })
    this.http.get(this._url + '/admin/products', header).subscribe((data) => { this.stations = data }, (error) => {
      console.error(error)
    })
  }


  private prepareStation() {
    this.confirmedStations = new Array<any>();
    this.sourceStations = new Array<any>();



      if (this.exists.length == 1) {
        // this.sourceStations.push(this.exists[0])
        console.log(this.exists[0])
        console.log(this.stations)
        for (let p = 0; p < this.stations.length; p++) {
          // console.log(this.stations[p])

          if (this.stations[p] == this.exists[0]){
            this.confirmedStations.push(this.stations[p])
            console.log(this.confirmedStations)

          }
            this.sourceStations.push(this.stations[p])

        }

      } else {
        for (let i = 0; i < this.stations.length; i++) {
          for (let j = 0; j <= this.exists.length; j++) {
            if (this.stations[i] == this.exists[j]) {
              this.confirmedStations.push(this.stations[i])
            } else if (this.stations[i] !== this.exists[j]) {
              this.sourceStations.push(this.stations[i])
            }
          }
        }
      }

      this.source = this.sourceStations;
      this.confirmed = this.confirmedStations;
  }




  toUpdate(customer) {
    this.cus = customer
    this.exists = this.cus.products
    // console.log(this.stations)
    this.prepareStation()
  }

  cusUpdate(cust) {
    cust.value.products = this.confirmed;
    var token = window.localStorage.getItem('tokenID')
    var header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    }
    // console.log(pro.value)
    this.http.put(this._url + '/admin/customerOrgs', cust.value, header).subscribe(customer => {
      this.ngOnInit();

    })
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
    this.http.delete(this._url + '/admin/customerOrgs/' + this.data, header).subscribe((data) => {
      console.log(this.data)
      this.ngOnInit()
    }, (error) => {
      console.error(error)
    })
  }
}
