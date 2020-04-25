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
  this.router.navigate(['/']);
  }

}
