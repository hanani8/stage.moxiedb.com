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
  {path: 'sadmin', loadChildren:() => import('./sAdmin/s-admin.module').then(mod => mod.SAdminModule)},
  { path: 'iuser', loadChildren:() => import('./iUser/i-user.module').then(mod => mod.IUserModule)},
  { path: 'admin', loadChildren:() => import('./Admin/admin.module').then(mod => mod.AdminModule)},
  { path: 'xuser', loadChildren:() => import('./xUser/x-user.module').then(mod => mod.XUserModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
