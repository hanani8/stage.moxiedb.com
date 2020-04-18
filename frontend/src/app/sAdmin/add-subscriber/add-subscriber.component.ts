import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'

import { DualListComponent } from 'angular-dual-listbox';

@Component({
  selector: 'app-add-subscriber',
  templateUrl: './add-subscriber.component.html',
  styleUrls: ['./add-subscriber.component.css']
})
export class AddSubscriberComponent implements OnInit {
  public search:any = '';
  products:any = [];
  //To Add Filter
  filter = true;
  format:any = DualListComponent.DEFAULT_FORMAT;
  //Master Array
  source = [];
  //Child Array
  target = [];



  private baseURL = "/api"
  constructor(private http:HttpClient) { }

  ngOnInit(){  
  var token = window.localStorage.getItem('tokenID')
    var header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    }
    this.http.get(this.baseURL + '/superAdmin/products', header).subscribe(product => {
      this.products = product['data'];
      for(let product of this.products){
      this.source.push(product.productName);
      }
    })
  }

  onSubmit(subForm){
  subForm.value.products = this.target;
  console.log(subForm.value);
    var token = window.localStorage.getItem('tokenID')
    var header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    }
     this.http.post(this.baseURL + '/superAdmin/subscriberOrgs', subForm.value,header).subscribe();
  }

}
