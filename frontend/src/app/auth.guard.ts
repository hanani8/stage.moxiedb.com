import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AmplifyService } from 'aws-amplify-angular';
import Amplify from 'aws-amplify';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private amplifySvc: AmplifyService) {
  }



  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.amplifySvc.auth().currentSession().catch((errors) => {
      this.redirectToLogin();
    });

  }
  redirectToLogin() {
    
    const url = 'https://subscribers.auth.us-east-2.amazoncognito.com/login?client_id=64dpm0jg550sq8663vtqcncec4&response_type=code&scope=openid+profile&redirect_uri=http://localhost:4200';
    window.location.assign(url);
  }

}
