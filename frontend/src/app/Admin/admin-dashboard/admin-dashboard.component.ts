import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {








  private _url: string = "api/admin";

  products: any = [];
  source: any = [];
  customers: any =[];


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    var token = window.localStorage.getItem('tokenID');
    var header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    };
    this.http.get(this._url + '/products', header).subscribe((data) => {this.source = data;
    console.log(this.source)},(error) => {
    console.error(error)
    })

  }

}
