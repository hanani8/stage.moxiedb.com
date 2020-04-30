import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestsService } from 'src/app/services/requests.service';
import { XrequestsService } from 'src/app/services/xrequests.service'

@Component({
  selector: 'app-xuser-dashboard',
  templateUrl: './xuser-dashboard.component.html',
  styleUrls: ['./xuser-dashboard.component.css']
})
export class XuserDashboardComponent implements OnInit {
  private baseURL = '/api/xuser';
  private _url = '/api'
  products: any = [];

  constructor(private http: HttpClient, private requestsService: XrequestsService) { }

  // title = 'Requests (in numbers)';
  cachedRequests: any = [];
  reverseRequest: any = [];
  activities: any = []
  reverseActivity: any = []


  pending = 0;
  new = 0;
  closed = 0;

  title = 'Browser market shares at a specific website, 2014';
  type = 'PieChart';
  data = [

    ['Pending', this.pending],
    ['Closed ', this.closed],
    ['New Request', this.new],

  ];
  columnNames = ['Browser', 'Percentage'];
  options = {
    is3D: true
  };
  width = 700;
  height = 520;


  constructor(private http: HttpClient) { }


  ngOnInit(){
    var token = window.localStorage.getItem('tokenID');
    var header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    };
    // this.http.get(this.baseURL + '/products', header).subscribe(data => this.products = data);
    this.http.get(this._url + '/activity').subscribe(data => {
      this.activities = data
    })
    this.requestsService.getDataa().subscribe(request => {
      this.cachedRequests = request['data'];
      this.reverse()
      // console.log(this.cachedRequests)
      for (let i = 0; i < this.cachedRequests.length; i++) {
        if (this.cachedRequests[i].requestStatus == 'Pending') {
          this.pending = this.pending + 1
        } else if (this.cachedRequests[i].requestStatus == 'Closed') {
          this.closed = this.closed + 1
        } else this.new = this.new + 1
      }
      this.refresh()
    })
  }

  refresh() {
    this.data = [
      ['Pending', this.pending],
      ['Closed ', this.closed],
      ['New Request', this.new],

    ];
    // throw new Error("Method not implemented.");
  }

  reverse() {
    // console.log(this.cachedRequests)
    for (let i = this.cachedRequests.length - 1; i >= 0; i--) {
      if (this.cachedRequests[i].requestStatus == 'New Request') {
        this.reverseRequest.push(this.cachedRequests[i])
      }
    }
    for (let j = this.activities.length - 1; j >= 0; j--) {
      this.reverseActivity.push(this.activities[j])
    }
  }
}
