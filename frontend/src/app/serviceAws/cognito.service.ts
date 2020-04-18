import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { adminEnvironment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CognitoService {

  constructor(private http: HttpClient) { }
  public getTokenDetailsFromCognito(callbackCode: string): Observable<any> {
    const details = {
      grant_type: 'authorization_code',
      code: callbackCode,
      scope: 'openid+profile',
      redirect_uri: adminEnvironment.redirectURL
    };
    const formBody = Object.keys(details)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(details[key])}`)
      .join('&');

    return this.http.post<any>(adminEnvironment.cognitoTokenURL,
      formBody, {
      responseType: 'json',
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + btoa(`${adminEnvironment.sso_api_username}:${adminEnvironment.sso_api_pwd}`)
      })
    });
  }


  public logoutUserFromCognito(): Observable<any> {
    return this.http.get<any>(adminEnvironment.logout);
  }


}
