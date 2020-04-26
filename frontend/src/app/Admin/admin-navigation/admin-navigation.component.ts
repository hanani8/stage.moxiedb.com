import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-navigation',
  templateUrl: './admin-navigation.component.html',
  styleUrls: ['./admin-navigation.component.css']
})
export class AdminNavigationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(){
  }

  logout(){
  window.localStorage.removeItem('token');
  window.localStorage.removeItem('tokenID');
  window.localStorage.removeItem('tokenRefresh');
  window.location.assign('https://moxiedb-admin.auth.us-east-2.amazoncognito.com/logout?client_id=3b0ib0kfo4n4km2k2i0g31hc8u&logout_uri=https://stage.moxiedb.com')
  }

}