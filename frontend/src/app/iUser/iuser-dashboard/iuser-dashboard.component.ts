import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/Product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-iuser-dashboard',
  templateUrl: './iuser-dashboard.component.html',
  styleUrls: ['./iuser-dashboard.component.css']
})
export class IuserDashboardComponent implements OnInit {

  constructor(private productService: ProductsService) {



  }


  title = 'Requests (in numbers)';
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
  products: Product[];
  ngOnInit(): void {
    this.products = this.productService.getProducts()
  }

}
