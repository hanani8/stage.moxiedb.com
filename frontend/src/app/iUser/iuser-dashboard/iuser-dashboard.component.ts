import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { RequestsService } from 'src/app/services/requests.service';



@Component({
  selector: 'app-iuser-dashboard',
  templateUrl: './iuser-dashboard.component.html',
  styleUrls: ['./iuser-dashboard.component.css']
})
export class IuserDashboardComponent implements OnInit {

  private baseURL = "/api/iuser"
  private baseurl = "/api/request"

  constructor(private http: HttpClient, private requestsService: RequestsService) { }

  cachedRequests: any = [];
  reverseRequest: any = [];

  pending = 0;
  new = 0;
  closed = 0;


  // title = 'Requests (in numbers)';
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
  products: any = [];
  request: any = [];



  ngOnInit(): void {

    var token = window.localStorage.getItem('tokenID');
    var header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    }
    this.http.get(this.baseURL + '/products', header).subscribe(data => this.products = data)
    this.requestsService.getData().subscribe(request => {
      this.cachedRequests = request['data'];

      for (let i = 0; i < this.cachedRequests.length; i++) {
        if (this.cachedRequests[i].requestStatus == 'Pending') {
          this.pending = this.pending + 1
        } else if (this.cachedRequests[i].requestStatus == 'Closed') {
          this.closed = this.closed + 1
        } else this.new = this.new + 1
      }
      // console.log(this.cachedRequests)
      this.refresh()
      this.reverse()
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
    for (let i = this.cachedRequests.length -1 ; i >= 0; i--) {
      this.reverseRequest.push(this.cachedRequests[i])
    }
    console.log(this.reverseRequest)

  }


}
