import { Component, OnInit, PipeTransform } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { DecimalPipe } from '@angular/common';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { request } from 'src/app/model/request';
// import {} from ''


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
  selector: 'app-iuser-my-requests',
  templateUrl: './iuser-my-requests.component.html',
  styleUrls: ['./iuser-my-requests.component.css']
})
export class IuserMyRequestsComponent implements OnInit {

  private baseURL: string = "/api"

  requests: any = [];
  public search:any = '';
  searchTerm: string;
  searchMarket: string;

  // filteredReq = this.requests;

  // filtereReq(searchString: string) {
  //   return this.requests.filter(req =>
  //     req.vendorOrg.toLowerCase().indexOf(searchString.toLowerCase()) !== -1)
  // }

   
  // get searchTerm(): string {
  //   return this._searchTerm;
  // }

  // set searchTerm(value: string) {
  //   this._searchTerm = value;
  //   this.filteredReq = this.filtereReq(value);
  // }

  // req = this.requests[0];




  // requests = this.requests[0]

  // testing(req){
  //   console.log(this.req[0])
  // };


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    var token = window.localStorage.getItem('tokenID');
    var header = {
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    }
    

    this.http.get(this.baseURL + '/request', header).subscribe(request => {
      this.requests = request['data']
      // console.log(this.requests)
    });

    


  }
}

