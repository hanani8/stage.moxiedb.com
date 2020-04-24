import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { AdminNavigationComponent } from './admin-navigation/admin-navigation.component';

import { OrganizationManagementComponent } from './organization-management/organization-management.component';
import { SAdminModule } from 'src/app/sAdmin/s-admin.module';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AngularDualListBoxModule } from 'angular-dual-listbox';
import { RoleManagementComponent } from './role-management/role-management.component';
import { FormsModule } from '@angular/forms';
import { AdminAddRoleComponent } from './admin-add-role/admin-add-role.component';
import { AccessControlComponent } from './access-control/access-control.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { AdminGuardService } from '../guards/admin-guard.service';


export const ROUTES:Routes = [
  { path: '', component: AdminDashboardComponent,canActivate: [AdminGuardService]},
  { path: 'organizationManagement', component: OrganizationManagementComponent,canActivate: [AdminGuardService]},
  { path: 'addCustomer', component: AddCustomerComponent,canActivate: [AdminGuardService]},
  { path: 'roleManage', component: RoleManagementComponent,canActivate: [AdminGuardService]},
  { path: 'addRole', component: AdminAddRoleComponent,canActivate: [AdminGuardService]},
  { path: 'accessControl', component: AccessControlComponent,canActivate: [AdminGuardService]}
]


@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminSidebarComponent,
    AdminNavigationComponent,
    OrganizationManagementComponent,
    AddCustomerComponent,
    RoleManagementComponent,
    AdminAddRoleComponent,
    AccessControlComponent
  ],
  imports: [
    RouterModule.forChild(ROUTES),
    CommonModule,
    RouterModule,
    SAdminModule,
    FormsModule,
    GoogleChartsModule,
    AngularDualListBoxModule
  ],

  exports: [
  ]
})
export class AdminModule { }
