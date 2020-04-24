import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { FormsModule, FormControl } from '@angular/forms';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  private baseURL: string = "/api"
  products: any = [];
  public searchField: any = '';
  prod: any = []
  data: any;
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    var token = window.localStorage.getItem('tokenID')
    var header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    }
    this.http.get(this.baseURL + '/superAdmin/products', header).subscribe(product => {
      this.products = product['data']
      console.log(this.products)
    })
  }

  toUpdate(product) {
    this.prod = product
  }

  productUpdate(pro) {
    var token = window.localStorage.getItem('tokenID')
    var header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    }
    // console.log(pro.value)
    this.http.put(this.baseURL + '/superAdmin/products', pro.value, header).subscribe(product => {
      this.ngOnInit();

    })
  }

  deleteProduct(_id) {
    this.data = _id
    console.log(this.data)
  }

  finalDelete() {
    var token = window.localStorage.getItem('tokenID')
    var header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    }
    this.http.delete(this.baseURL + '/superAdmin/products/' + this.data, header).subscribe(product => {
      console.log(this.data)
      this.ngOnInit()

    })
  }


  // onDelete(product) {
  //   this.products = this.products.filter(s => s.id !== product.id)
  // }

  //Takes specific product details when edit is clicked
  // toUpdate(product) {
  //   this.product = product;
  // }

  // prodUpdate(prodEdit) {
  //   // console.log(this.product.CASNumber)
  //   // console.log(prodEdit.value.cas)
  //   this.product.CASNumber = prodEdit.value.cas,
  //     this.product.productName = prodEdit.value.name,
  //     this.product.productType = prodEdit.value.type,
  //     this.product.therapeuticCategory = prodEdit.value.therapeutic
  // }

}
