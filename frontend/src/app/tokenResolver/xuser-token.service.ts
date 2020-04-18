import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap, finalize, catchError } from 'rxjs/operators';
import { Location } from '@angular/common';
import { XuserCognitoService } from '../serviceAws/xuser-cognito.service';

@Injectable({
  providedIn: 'root'
})
export class XuserTokenService {

  constructor(private location: Location,
    private awsCognitoService: XuserCognitoService,
    private router: Router) { }

  resolve(): Observable<any | null> {

    const urlParams: URLSearchParams = new URLSearchParams(window.location.search);
    const code: string = urlParams.get('code');

    if (!code) {
      return of(null);
    }

    return this.getTokenDetailsFromCognito(code).pipe(
      finalize(() => {
        this.location.replaceState(window.location.pathname);
      })
    );
  }

  //calling the api based on the code present in the URL
  getTokenDetailsFromCognito(code: string): Observable<any | null> {
    return this.awsCognitoService.getTokenDetailsFromCognito(code).pipe(
      switchMap((response: any) => {
        console.log('Response: ', response);
        // console.log(response.id_token)

        localStorage.setItem('token', response.access_token);
        localStorage.setItem('tokenID', response.id_token);
        localStorage.setItem('tokenRefresh', response.refresh_token);



        if (response) {
          this.router.navigate(['xuser-utility']);
        }

        return of(response);
      }),
      catchError((error) => {
        return error;
      })
    );
  }
}
