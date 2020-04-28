import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generate-ticket',
  templateUrl: './generate-ticket.component.html',
  styleUrls: ['./generate-ticket.component.css']
})
export class GenerateTicketComponent implements OnInit {
  model: NgbDateStruct;
  genTkt: FormGroup;

  private baseURL = '/api/xuser';
  private _url = '/api';
  respondent: any;
  respondentDetails: any = []


  constructor(private fb: FormBuilder, private http: HttpClient, private tos: ToastrService, private router: Router) { }

  ngOnInit() {
    this.genTkt = this.fb.group({
      documentNames: [null, Validators.required],
      vendorOrg: [null, Validators.required],
      date: [null, Validators.required],
      products: [null, Validators.required],
      market: [null, Validators.required],
      criticality: [null, Validators.required],
      comment: [null, Validators.required],
      respondentName: [null, Validators.required],
      respondentEmail: [null, Validators.required],
      respondentContact: [null, Validators.required],
    });
    var token = window.localStorage.getItem('tokenID');
    var header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    };
    this.http.get(this.baseURL + '/products', header).subscribe(data => this.products = data);
    this.http.get(this.baseURL + '/roles', header).subscribe(data =>
      this.respondentNames = data)
    // console.log(this.respondentNames)
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
    this.http.post(this._url + '/xrequest', this.genTkt.value, header).subscribe();
    this.tos.success('Request has been sent!');
    this.router.navigate(['/my-requests'])
  }


  someMethod($event) {
    this.respondent = $event
    console.log(this.respondent)
    var token = window.localStorage.getItem('tokenID');
    var header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    }
    this.http.get(this.baseURL + '/roles/respondent/' + this.respondent, header).subscribe(data => {
      this.respondentDetails = data
    })

    // console.log(this.respondentDetails)


  }
}






