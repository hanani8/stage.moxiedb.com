import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { request } from 'src/app/model/request';
import { Observable } from 'rxjs';
import { Interaction } from 'src/app/model/interaction';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  private _url: string = "/api/request/";
  private _urlcomment: string = "/api/request/comments/"
  private baseURL: string = "/api"

  requests: any = [];

  constructor(private http: HttpClient) { }

  token = window.localStorage.getItem('tokenID')
  header = {
    headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`)
  };

  getRequests(requestID): Observable<request> {
    return this.http.get<request>(`${this._url}${requestID}`, this.header)

  };

  getComments(requestID): Observable<Interaction> {
    return this.http.get<Interaction>(`${this._urlcomment}${requestID}`, this.header)
  };



  getData(): Observable<any> {
    return this.http.get<any>(this.baseURL + '/request', this.header)

  }

  // getDataa(): Observable<any> {
  //   console.log("dsd")
  //   return this.http.get<any>(this.baseURL + '/request/dash', this.header)

  // }


}

