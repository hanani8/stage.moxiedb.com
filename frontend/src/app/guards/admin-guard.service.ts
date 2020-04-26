import { Injectable } from '@angular/core';
import decode from 'jwt-decode';
import { ActivatedRouteSnapshot, UrlTree, RouterStateSnapshot, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService {

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(localStorage.getItem('tokenID')){
    const token = localStorage.getItem('tokenID');
    const tokenPayload = decode(token);
    console.log(tokenPayload['custom:role'])
    if(tokenPayload['custom:role'] == 'admin' && tokenPayload['exp'] > (Math.round(new Date().getTime()/1000))) {
      return true;
    } 
    else 
    {
window.location.assign('https://moxiedb-admin.auth.us-east-2.amazoncognito.com/login?client_id=3b0ib0kfo4n4km2k2i0g31hc8u&response_type=code&scope=openid+profile&redirect_uri=https://stage.moxiedb.com/admin-utility')
    }
  }
   else
    {
window.location.assign('https://moxiedb-admin.auth.us-east-2.amazoncognito.com/login?client_id=3b0ib0kfo4n4km2k2i0g31hc8u&response_type=code&scope=openid+profile&redirect_uri=https://stage.moxiedb.com/admin-utility')
    }    
    
  }
}
