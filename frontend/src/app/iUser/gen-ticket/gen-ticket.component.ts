import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gen-ticket',
  templateUrl: './gen-ticket.component.html',
  styleUrls: ['./gen-ticket.component.css']
})
export class GenTicketComponent implements OnInit {
  model: NgbDateStruct;
  genTkt: FormGroup;

  private baseURL = "/api/iuser";
  private _url = "/api";
  respondentDetails: any;

  constructor(private fb: FormBuilder, private http: HttpClient,  private tos: ToastrService, private router: Router) { }

  ngOnInit() {
    this.genTkt = this.fb.group({
      documentNames: '',
      vendorOrg: '',
      date: '',
      products: '',
      market: '',
      criticality: '',
      comment: '',
      respondentName: '',
      respondentEmail: '',
      respondentContact: '',
    });
    var token = window.localStorage.getItem('tokenID');
    var header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    };
    this.http.get(this.baseURL + '/products', header).subscribe(data => this.products = data);
    this.http.get(this.baseURL + '/roles', header).subscribe(data =>
      this.respondentNames = data)
  }


  documentNames: any = [
    'DMF',
    'Quality Affairs',
    'COA',
    'Equipments'
  ]

  products: any = [
  ]

  markets: any = ['US', 'Europe', 'India', 'Canada', 'China']

  criticalities: any = ["Intermediate", "Fast", "Advance"]

  respondentNames: any = []

  respondentEmails: any = ["yes@gmail.com", "bank@gmail.com", "comeon@gmail.com"]

  respondentContacts: any = ["990", "880", "660"]

  onSubmit() {
    console.log(this.genTkt.value);
    var token = window.localStorage.getItem('tokenID');
    var header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    }
    this.genTkt.value.requestStatus = "New Request";
    this.http.post(this._url + '/request', this.genTkt.value, header).subscribe();
    this.tos.success( 'Request has been sent!');
    this.router.navigate(['/myRequest'])
  }


  giveDetails() {
    console.log(this.respondentDetails)
  }
}

