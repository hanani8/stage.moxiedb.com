import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { request } from 'src/app/model/request';
import { Observable } from 'rxjs';
import { Interaction } from 'src/app/model/interaction';

@Injectable({
  providedIn: 'root'
})
export class XrequestsService {

  private _url: string = "/api/xrequest/";
  private _urlcomment: string = "/api/xrequest/comments/"

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
  }
}
