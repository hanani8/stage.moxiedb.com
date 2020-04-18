import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminsService {


private _url: string = "/api/admin";


  constructor(private http: HttpClient) { }

  token = window.localStorage.getItem('tokenID');
  header = {
    headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`)
  };


  getData(): Observable<any>{
    return this.http.get<any>(this._url, this.header)
  };


}





