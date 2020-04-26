import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-xuser-navigation',
  templateUrl: './xuser-navigation.component.html',
  styleUrls: ['./xuser-navigation.component.css']
})
export class XuserNavigationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(){
  }

  logout(){
  window.localStorage.removeItem('token');
  window.localStorage.removeItem('tokenID');
  window.localStorage.removeItem('tokenRefresh');
  window.location.assign('https://xuser-moxiedb.auth.us-east-2.amazoncognito.com/logout?client_id=531teggr74n1fnpba8epi4cea2&logout_uri=https://stage.moxiedb.com')
  }

}