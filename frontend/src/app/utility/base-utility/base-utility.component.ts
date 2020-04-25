import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-utility',
  template: `
    <h1>
      <a href="https://moxiedb-admin.auth.us-east-2.amazoncognito.com/login?client_id=3b0ib0kfo4n4km2k2i0g31hc8u&response_type=code&scope=openid+profile&redirect_uri=https://stage.moxiedb.com/admin-utility">Admin</a>
    </h1>
    <h1>
      <a href="https://iuser-moxiedb.auth.us-east-2.amazoncognito.com/login?client_id=6tgfkisrs55u5ovgv6dt1h8hbu&response_type=code&scope=openid+profile&redirect_uri=https://stage.moxiedb.com/iuser-utility">Internal User</a>
    </h1>
    <h1>
      <a href="https://xuser-moxiedb.auth.us-east-2.amazoncognito.com/login?client_id=531teggr74n1fnpba8epi4cea2&response_type=code&scope=openid+profile&redirect_uri=https://stage.moxiedb.com/xuser-utility">External User</a>
    </h1>
    <h1>
    <a href="https://sadmin-moxie.auth.us-east-2.amazoncognito.com/login?client_id=7elt7v1gnt5ov610jr5ojrie9j&response_type=code&scope=openid+profile&redirect_uri=https://stage.moxiedb.com/sadmin-utility">
      Super Admin
    </a>
    </h1>
  `,
  styles: []
})
export class BaseUtilityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
