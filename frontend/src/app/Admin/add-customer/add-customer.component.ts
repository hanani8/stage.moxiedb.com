import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/Product';
import { ProductsService } from 'src/app/services/products.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DualListComponent } from 'angular-dual-listbox';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  products: any = [];
  //To Add Filter
  filter = true;
  format: any = DualListComponent.DEFAULT_FORMAT;
  //Master Array
  source: any = [];
  //Child Array
  target = [];


private _url: string = "/api";


  constructor(private productsService: ProductsService, private http: HttpClient,  private tos: ToastrService, private router: Router) { }

  ngOnInit() {
    var token = window.localStorage.getItem('tokenID');
    var header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    };

    this.http.get(this._url + '/admin/products', header).subscribe((data) => {this.source = data},(error) => {
    console.error(error)
    })
  }


  onSubmit(subForm){
   subForm.value.products = this.target;
   console.log(subForm.value);
   var token = window.localStorage.getItem('tokenID');
   var header = {
   headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
   }
   this.http.post(this._url + '/admin/addCustomerOrg', subForm.value,header).subscribe((error) => {
    console.error(error)
    });
    this.tos.success( 'Organization Added!');
    this.router.navigate(['/admin/organizationManagement'])

  }


}
