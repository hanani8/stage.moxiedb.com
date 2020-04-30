import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  private baseURL: string = "api";


  constructor(private http: HttpClient) { }

  token = window.localStorage.getItem('tokenID')
  header = {
    headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`)
  };

  getxData() :Observable<any> {
  return this.http.get<any>(this.baseURL + '/xrequest', this.header)
  }
}
