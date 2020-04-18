import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http'

@Component({
  selector: 'app-iuser-products',
  templateUrl: './iuser-products.component.html',
  styleUrls: ['./iuser-products.component.css']
})
export class IuserProductsComponent implements OnInit {

  constructor(private http: HttpClient) { }

  private baseURL = "/api/iuser"

  products: any = [];

  ngOnInit(){
    var token = window.localStorage.getItem('tokenID');
    var header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    }
    this.http.get(this.baseURL + '/products', header).subscribe(data => this.products = data)
  }

}
