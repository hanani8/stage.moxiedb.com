import { Component, OnInit, PipeTransform } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { DecimalPipe } from '@angular/common';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { request } from 'src/app/model/request';

interface Request {
  documentsNames: string;
  vendorOrg: string;
  products: string;
  market: string;
  criticality: string;
  comment: string;
  respondentName: string;
  respondentEmail: string;
  respondentContact: string;
}


@Component({
  selector: 'app-xuser-my-requests',
  templateUrl: './xuser-my-requests.component.html',
  styleUrls: ['./xuser-my-requests.component.css']
})
export class XuserMyRequestsComponent implements OnInit {

  private baseURL: string = "/api"

  requests: any = [];
  public searchField: any = '';
  searchTerm: string;
  searchMarket: string;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    var token = window.localStorage.getItem('tokenID');
    var header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    }


    this.http.get(this.baseURL + '/xrequest', header).subscribe(request => {
      this.requests = request['data']
      // console.log(this.requests)
    });
  }

}
