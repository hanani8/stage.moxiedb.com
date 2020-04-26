import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iuser-navigation',
  templateUrl: './iuser-navigation.component.html',
  styleUrls: ['./iuser-navigation.component.css']
})
export class IuserNavigationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(){
  }

  logout(){
  window.localStorage.removeItem('token');
  window.localStorage.removeItem('tokenID');
  window.localStorage.removeItem('tokenRefresh');
  window.location.assign('https://iuser-moxiedb.auth.us-east-2.amazoncognito.com/logout?client_id=6tgfkisrs55u5ovgv6dt1h8hbu&logout_uri=https://stage.moxiedb.com')
  }
}

