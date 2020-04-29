import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-xuser-dashboard',
  templateUrl: './xuser-dashboard.component.html',
  styleUrls: ['./xuser-dashboard.component.css']
})
export class XuserDashboardComponent implements OnInit {
  baseURL: string = "/api/xuser"
  products: any = [];

  constructor(private http: HttpClient) { }


  ngOnInit(){
    var token = window.localStorage.getItem('tokenID');
    var header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    };
    this.http.get(this.baseURL + '/products', header).subscribe(data => this.products = data);
  }

  title = 'Requests';
  type = 'BarChart';
  data = [
    ["Regulatory Affairs", 900, 390],
    ["Quality Affairs", 1000, 400],
    ["COA", 1170, 440],
    ["DMF", 1250, 480],
    ["Samples", 1530, 540]
  ];
  columnNames = ['Year', 'Completed', 'In-process'];
  options = {
    hAxis: {
      title: 'Year'
    },
    vAxis: {
      minValue: 0
    },
    isStacked: true
  };
  width = 550;
  height = 400;
}
