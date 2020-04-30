import { Component, OnInit, PipeTransform } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { request } from 'src/app/model/request';
import { RequestsService } from 'src/app/services/requests.service';
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
  cachedRequests: any = [];
  public searchField: any = '';
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


  constructor(private http: HttpClient, private requestsService: RequestsService) { }

  ngOnInit(): void {
    var token = window.localStorage.getItem('tokenID');
    var header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    }
    this.requestsService.getData().subscribe(request => {
      this.cachedRequests = request['data'];
      this.requests = this.cachedRequests;
    })
  }

  transfer() {
    for (let request of this.cachedRequests) {
      this.requests.push(request);
    }
  }

  filter($event) {
    console.log($event.target.value);
    if ($event.target.value == '') {
      this.requests = this.requests;
    }
    else {
      this.requests = this.cachedRequests.filter((item) => item.requestStatus == $event.target.value);
    }
  }

  filter1($event) {
    console.log($event.target.value);
    if ($event.target.value == '') {
      this.requests = this.requests;
    }
    else {
      this.requests = this.cachedRequests.filter((item) => item.criticality == $event.target.value);
    }
  }
}


