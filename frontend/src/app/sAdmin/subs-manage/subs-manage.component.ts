import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DualListComponent } from 'angular-dual-listbox';

@Component({
  selector: 'app-subs-manage',
  templateUrl: './subs-manage.component.html',
  styleUrls: ['./subs-manage.component.css']
})
export class SubsManageComponent implements OnInit {

  public search: any = '';
  subscribers: any = [];
  private baseURL = "/api"
  products: any = [];


  subDetails: any = []
  exists: any = []

  data: any;



  constructor(private http: HttpClient) { }

  //To Add Filter
  filter = true;
  format: any = DualListComponent.DEFAULT_FORMAT;
  //Master Array
  source: any = [];
  //Child Array
  confirmed: any = [];
  private confirmedStations: Array<any>;
  private sourceStations: Array<any> = [];
  private stations: Array<any> = [];



  ngOnInit() {
    var token = window.localStorage.getItem('tokenID')
    var header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    }
    this.http.get(this.baseURL + '/superAdmin/subscriberOrgs', header).subscribe(subscriber => {
      this.subscribers = subscriber['data'];
    })
    this.http.get(this.baseURL + '/superAdmin/products', header).subscribe(product => {
      this.products = product['data'];
      for (let product of this.products) {
        this.stations.push(product.productName);
      }
    })
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


  toUpdate(subscriber) {
    this.subDetails = subscriber;
    this.exists = this.subDetails.products;
    this.prepareStation()

  }

  subsUpdate(subs){
    subs.value.products = this.confirmed;
    var token = window.localStorage.getItem('tokenID')
    var header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    }
    // console.log(pro.value)
    this.http.put(this.baseURL + '/superAdmin/subscriberOrgs', subs.value, header).subscribe(product => {
      this.ngOnInit();

    })
  }


  deleteSub(_id) {
    this.data = _id
  }


  finalDelete() {
    var token = window.localStorage.getItem('tokenID')
    var header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    }
    this.http.delete(this.baseURL + '/superAdmin/subscriberOrgs/' + this.data, header).subscribe(subscriber => {
      console.log(this.data)
      this.ngOnInit()

    })
  }
}
