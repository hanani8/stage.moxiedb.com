import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubsManageComponent } from './sAdmin/subs-manage/subs-manage.component';
import { DashboardComponent } from './sAdmin/dashboard/dashboard.component';
import { AddSubscriberComponent } from './sAdmin/add-subscriber/add-subscriber.component';
import { ProductsComponent } from './sAdmin/products/products.component';
import { AddProductComponent } from './sAdmin/add-product/add-product.component';
import { AdminAssignmentComponent } from './sAdmin/admin-assignment/admin-assignment.component';
import { AddAdminComponent } from './sAdmin/add-admin/add-admin.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { OrganizationManagementComponent } from './Admin/organization-management/organization-management.component';
import { AddCustomerComponent } from 'src/app/Admin/add-customer/add-customer.component';
import { RoleManagementComponent } from './Admin/role-management/role-management.component';
import { AdminAddRoleComponent } from './Admin/admin-add-role/admin-add-role.component';
import { AccessControlComponent } from './Admin/access-control/access-control.component';
import { PRGComponent } from './iUser/prg/prg.component';
import { IuserDashboardComponent } from './iUser/iuser-dashboard/iuser-dashboard.component';
import { IuserMyRequestsComponent } from './iUser/iuser-my-requests/iuser-my-requests.component';
import { GenTicketComponent } from './iUser/gen-ticket/gen-ticket.component';
import { IuserProductsComponent } from './iUser/iuser-products/iuser-products.component';
import { TokenService } from '.././app/tokenResolver/token.service'
import { AdminRedirectComponent } from './utility/admin-redirect/admin-redirect.component';
import { IuserRedirectComponent } from './utility/iuser-redirect/iuser-redirect.component';
import { XuserRedirectComponent } from './utility/xuser-redirect/xuser-redirect.component';
import { IuserTokenService } from './tokenResolver/iuser-token.service';
import { XuserTokenService } from './tokenResolver/xuser-token.service';
// import { AdminGuardGuard } from './guards/admin-guard.guard';
import { AdminGuardService } from './guards/admin-guard.service';
import { IuserGuardService } from './guards/iuser-guard.service';
import { XuserGuardService } from './guards/xuser-guard.service';
// import { AuthGuard } from '../app/auth.guard';
import { GenerateTicketComponent } from './xUser/generate-ticket/generate-ticket.component';
import { XuserDashboardComponent } from './xUser/xuser-dashboard/xuser-dashboard.component';
import { XuserPrgComponent } from './xUser/xuser-prg/xuser-prg.component';
import { XuserMyRequestsComponent } from './xUser/xuser-my-requests/xuser-my-requests.component';
import { SadminRedirectComponent } from './utility/sadmin-redirect/sadmin-redirect.component';
import { SadminGuardService } from './guards/sadmin-guard.service';
import { SadminTokenService } from './tokenResolver/sadmin-token.service';




const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [SadminGuardService] },
  { path: 'sadmin-utility', component: SadminRedirectComponent, resolve: { access: SadminTokenService } },
  { path: 'admin-utility', component: AdminRedirectComponent, resolve: { access: TokenService } },
  { path: 'iuser-utility', component: IuserRedirectComponent, resolve: { access: IuserTokenService } },
  { path: 'xuser-utility', component: XuserRedirectComponent, resolve: { access: XuserTokenService } },


  { path: 'dashboard', component: DashboardComponent, canActivate: [SadminGuardService] },
  { path: 'orgManagement', component: SubsManageComponent, canActivate: [SadminGuardService] },
  { path: 'addSubs', component: AddSubscriberComponent, canActivate: [SadminGuardService] },
  { path: 'products', component: ProductsComponent, canActivate: [SadminGuardService] },
  { path: 'addProd', component: AddProductComponent, canActivate: [SadminGuardService] },
  { path: 'adminAssign', component: AdminAssignmentComponent, canActivate: [SadminGuardService] },
  { path: 'addAdmin', component: AddAdminComponent, canActivate: [SadminGuardService] },
  { path: 'admin', component: AdminDashboardComponent, canActivate: [AdminGuardService] },
  { path: 'admin/organizationManagement', component: OrganizationManagementComponent, canActivate: [AdminGuardService] },
  { path: 'admin/addCustomer', component: AddCustomerComponent, canActivate: [AdminGuardService] },
  { path: 'admin/roleManage', component: RoleManagementComponent, canActivate: [AdminGuardService] },
  { path: 'admin/addRole', component: AdminAddRoleComponent, canActivate: [AdminGuardService] },
  { path: 'admin/accessControl', component: AccessControlComponent, canActivate: [AdminGuardService] },

  { path: 'iuser/prg/:id', component: PRGComponent, canActivate: [IuserGuardService] },
  { path: 'iuser', component: IuserDashboardComponent, canActivate: [IuserGuardService] },
  { path: 'myRequest', component: IuserMyRequestsComponent, canActivate: [IuserGuardService] },
  { path: 'genTkt', component: GenTicketComponent, canActivate: [IuserGuardService] },
  { path: 'iuser-products', component: IuserProductsComponent, canActivate: [IuserGuardService] },

  { path: 'xuser/prg/:id', component: XuserPrgComponent, canActivate: [XuserGuardService] },
  { path: 'xuser', component: XuserDashboardComponent, canActivate: [XuserGuardService] },
  { path: 'generate-ticket', component: GenerateTicketComponent, canActivate: [XuserGuardService] },
  { path: 'my-requests', component: XuserMyRequestsComponent, canActivate: [XuserGuardService] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
