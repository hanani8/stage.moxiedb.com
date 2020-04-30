import { Component, OnInit, PipeTransform } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { DecimalPipe } from '@angular/common';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { request } from 'src/app/model/request';
import { SupplierService } from 'src/app/services/supplier.service';

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
  selector: 'app-xuser-my-requests',
  templateUrl: './xuser-my-requests.component.html',
  styleUrls: ['./xuser-my-requests.component.css']
})
export class XuserMyRequestsComponent implements OnInit {

  requests: any = [];
  public searchField: any = '';
  searchTerm: string;
  searchMarket: string;
  constructor(private http: HttpClient, private supplierService: SupplierService) { }

  ngOnInit() {
    this.supplierService.getxData().subscribe(request => {
    this.requests = request['data'];
    })
  }

}
