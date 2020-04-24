import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TokenService } from '.././app/tokenResolver/token.service'
import { AdminRedirectComponent } from './utility/admin-redirect/admin-redirect.component';
import { IuserRedirectComponent } from './utility/iuser-redirect/iuser-redirect.component';
import { XuserRedirectComponent } from './utility/xuser-redirect/xuser-redirect.component';
import { IuserTokenService } from './tokenResolver/iuser-token.service';
import { XuserTokenService } from './tokenResolver/xuser-token.service';
import { SadminRedirectComponent } from './utility/sadmin-redirect/sadmin-redirect.component';
import { SadminTokenService } from './tokenResolver/sadmin-token.service';
import { BaseUtilityComponent } from './utility/base-utility/base-utility.component';

const routes: Routes = [
  {path: '', component: BaseUtilityComponent },
  { path: 'sadmin-utility', component: SadminRedirectComponent, resolve: { access: SadminTokenService } },
  { path: 'admin-utility', component: AdminRedirectComponent, resolve: { access: TokenService } },
  { path: 'iuser-utility', component: IuserRedirectComponent, resolve: { access: IuserTokenService } },
  { path: 'xuser-utility', component: XuserRedirectComponent, resolve: { access: XuserTokenService } },
  {path: 'sadmin', loadChildren:'./sAdmin/s-admin.module#SAdminModule'},
  { path: 'iuser', loadChildren:'./iUser/i-user.module#IUserModule'},
  { path: 'admin', loadChildren: './Admin/admin.module#AdminModule'},
  { path: 'xuser', loadChildren: './xUser/x-user.module#XUserModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
