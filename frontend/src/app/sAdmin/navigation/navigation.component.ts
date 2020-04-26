import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(){
  }

  logout(){
  window.localStorage.removeItem('token');
  window.localStorage.removeItem('tokenID');
  window.localStorage.removeItem('tokenRefresh');
  window.location.assign('https://sadmin-moxie.auth.us-east-2.amazoncognito.com/logout?client_id=7elt7v1gnt5ov610jr5ojrie9j&logout_uri=https://stage.moxiedb.com')

  }

}
