import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { Subscriber } from '../model/Subscriber';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscriberService {
  constructor(private http:HttpClient) { }
  private baseURL: string = "/api"
  token = window.localStorage.getItem('tokenID')
  header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`)
    }
  getSubscribers():Observable<any>{
    return this.http.get(this.baseURL + '/superAdmin/products', this.header)
  }

  enroll(subscriber: Subscriber){
  console.log(subscriber);
  return this.http.post<any>(this.baseURL, subscriber, this.header);
 }


}
