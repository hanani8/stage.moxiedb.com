import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class IuserGuardService {

  canActivate(


    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(localStorage.getItem('tokenID')){
    const token = localStorage.getItem('tokenID');
    const tokenPayload = decode(token);
    console.log(tokenPayload['custom:role'])
    if(tokenPayload['custom:role'] == 'iuser' && tokenPayload['exp'] < (Math.round(new Date().getTime()/1000))) {
      return true;
    } 
    else 
    {
window.location.assign('https://iuser-moxiedb.auth.us-east-2.amazoncognito.com/login?client_id=6tgfkisrs55u5ovgv6dt1h8hbu&response_type=code&scope=openid+profile&redirect_uri=https://stage.moxiedb.com/iuser-utility')
    }
  }
   else
    {
window.location.assign('https://iuser-moxiedb.auth.us-east-2.amazoncognito.com/login?client_id=6tgfkisrs55u5ovgv6dt1h8hbu&response_type=code&scope=openid+profile&redirect_uri=https://stage.moxiedb.com/iuser-utility')
    }
  }
}
