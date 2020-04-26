import { Injectable } from '@angular/core';
import decode from 'jwt-decode';
import { ActivatedRouteSnapshot, UrlTree, RouterStateSnapshot, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SadminGuardService {

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (localStorage.getItem('tokenID')) {
      const token = localStorage.getItem('tokenID');
      const tokenPayload = decode(token);
      console.log(tokenPayload['custom:role'])
      if (tokenPayload['custom:role'] == 'sadmin' && tokenPayload['exp'] > (Math.round(new Date().getTime()/1000))) {
        return true;
      }
      else {
        window.location.assign('https://sadmin-moxie.auth.us-east-2.amazoncognito.com/login?client_id=7elt7v1gnt5ov610jr5ojrie9j&response_type=code&scope=openid+profile&redirect_uri=https://stage.moxiedb.com/sadmin-utility')
      }
    }
    else {
      window.location.assign('https://sadmin-moxie.auth.us-east-2.amazoncognito.com/login?client_id=7elt7v1gnt5ov610jr5ojrie9j&response_type=code&scope=openid+profile&redirect_uri=https://stage.moxiedb.com/sadmin-utility')
    }

  }
}
