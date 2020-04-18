import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SidebarComponent } from 'src/app/sAdmin/sidebar/sidebar.component';
import { NavigationComponent } from 'src/app/sAdmin/navigation/navigation.component';
import { SubsManageComponent } from 'src/app/sAdmin/subs-manage/subs-manage.component';
import { DashboardComponent } from 'src/app/sAdmin/dashboard/dashboard.component';
import { AddSubscriberComponent } from 'src/app/sAdmin/add-subscriber/add-subscriber.component';
import { ProductsComponent } from 'src/app/sAdmin/products/products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminAssignmentComponent } from './admin-assignment/admin-assignment.component';
import { HttpClientModule} from '@angular/common/http'
import { SearchPipe } from 'src/app/search.pipe';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { AngularDualListBoxModule } from 'angular-dual-listbox';


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
    SearchPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularDualListBoxModule
  ],
  exports: [
    SidebarComponent,
    NavigationComponent,
    SubsManageComponent,
    DashboardComponent,
    AddSubscriberComponent,
    ProductsComponent,
    SearchPipe
  ]
})
export class SAdminModule { }
