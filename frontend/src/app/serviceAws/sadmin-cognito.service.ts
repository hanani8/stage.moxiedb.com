import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { sadminEnvironment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SadminCognitoService {

  constructor(private http: HttpClient) { }
  public getTokenDetailsFromCognito(callbackCode: string): Observable<any> {
    const details = {
      grant_type: 'authorization_code',
      code: callbackCode,
      scope: 'openid+profile',
      redirect_uri: sadminEnvironment.redirectURL
    };
    const formBody = Object.keys(details)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(details[key])}`)
      .join('&');

    return this.http.post<any>(sadminEnvironment.cognitoTokenURL,
      formBody, {
      responseType: 'json',
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + btoa(`${sadminEnvironment.sso_api_username}:${sadminEnvironment.sso_api_pwd}`)
      })
    });
  }


  public logoutUserFromCognito(): Observable<any> {
    return this.http.get<any>(sadminEnvironment.logout);
  }
}
