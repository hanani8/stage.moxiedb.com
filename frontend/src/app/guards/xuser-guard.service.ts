import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class XuserGuardService {

  canActivate(


    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(localStorage.getItem('tokenID')){
    const token = localStorage.getItem('tokenID');
    const tokenPayload = decode(token);
    console.log(tokenPayload['custom:role'])
    if(tokenPayload['custom:role'] == 'xuser') {
      return true;
    } 
    else 
    {
window.location.assign('https://xuser-moxiedb.auth.us-east-2.amazoncognito.com/login?client_id=531teggr74n1fnpba8epi4cea2&response_type=code&scope=openid+profile&redirect_uri=http://localhost:3000/xuser-utility')
    }
  }
   else
    {
window.location.assign('https://xuser-moxiedb.auth.us-east-2.amazoncognito.com/login?client_id=531teggr74n1fnpba8epi4cea2&response_type=code&scope=openid+profile&redirect_uri=http://localhost:3000/xuser-utility')
    }
  }
}
