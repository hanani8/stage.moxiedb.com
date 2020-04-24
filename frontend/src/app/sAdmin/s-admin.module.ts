import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes,RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SidebarComponent } from 'src/app/sAdmin/sidebar/sidebar.component';
import { NavigationComponent } from 'src/app/sAdmin/navigation/navigation.component';
import { SubsManageComponent } from 'src/app/sAdmin/subs-manage/subs-manage.component';
import { DashboardComponent } from 'src/app/sAdmin/dashboard/dashboard.component';
import { AddSubscriberComponent } from 'src/app/sAdmin/add-subscriber/add-subscriber.component';
import { ProductsComponent } from 'src/app/sAdmin/products/products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminAssignmentComponent } from './admin-assignment/admin-assignment.component';
import { HttpClientModule } from '@angular/common/http';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { AngularDualListBoxModule } from 'angular-dual-listbox';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { SadminGuardService } from '../guards/sadmin-guard.service';
export const ROUTES:Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [SadminGuardService]},
  { path: 'orgManagement', component: SubsManageComponent, canActivate: [SadminGuardService]},
  { path: 'addSubs', component: AddSubscriberComponent, canActivate: [SadminGuardService]},
  { path: 'products', component: ProductsComponent, canActivate: [SadminGuardService]},
  { path: 'addProd', component: AddProductComponent, canActivate: [SadminGuardService]},
  { path: 'adminAssign', component: AdminAssignmentComponent, canActivate: [SadminGuardService]},
  { path: 'addAdmin', component: AddAdminComponent, canActivate: [SadminGuardService]}
]


@NgModule({
  declarations: [
    SidebarComponent,
    NavigationComponent,
    SubsManageComponent,
    DashboardComponent,
    AddSubscriberComponent,
    ProductsComponent,
    AddProductComponent,
    AdminAssignmentComponent,
    AddAdminComponent,
  ],
  imports: [
    RouterModule.forChild(ROUTES),
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularDualListBoxModule,
    SharedModuleModule,
  ],
  exports: []
})
export class SAdminModule { }
