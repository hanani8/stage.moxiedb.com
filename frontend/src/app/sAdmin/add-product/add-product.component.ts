import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private http: HttpClient) { }
  private baseURL = "/api"

  ngOnInit(): void {
  }


  onSubmit(prodForm){
    console.log(prodForm.value);
    var token = window.localStorage.getItem('tokenID')
    var header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    }
    this.http.post(this.baseURL+ '/superAdmin/products' , prodForm.value, header).subscribe();
  }
}
