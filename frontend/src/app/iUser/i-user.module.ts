import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IuserDashboardComponent } from 'src/app/iUser/iuser-dashboard/iuser-dashboard.component';
import { PRGComponent } from './prg/prg.component';
import { IuserSidebarComponent } from './iuser-sidebar/iuser-sidebar.component';
import { IuserNavigationComponent } from './iuser-navigation/iuser-navigation.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IuserMyRequestsComponent } from './iuser-my-requests/iuser-my-requests.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { GenTicketComponent } from './gen-ticket/gen-ticket.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule} from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { IuserProductsComponent } from './iuser-products/iuser-products.component'
import { RequestFilterPipe } from './iuser-my-requests/request-filter.pipe';
import { fromEventPattern } from 'rxjs';
import { BrowserModule } from '@angular/platform-browser';
import { SAdminModule } from '../sAdmin/s-admin.module';
import { GoogleChartsModule } from 'angular-google-charts';
// import { MatSliderModule } from '@angular/material/slider';
// import {AmplifyAngularModule } from 'aws-amplify-angular'



@NgModule({
  declarations: [
    IuserDashboardComponent,
    IuserSidebarComponent,
    IuserNavigationComponent,
    IuserMyRequestsComponent,
    PRGComponent,
    GenTicketComponent,
    IuserProductsComponent,
    RequestFilterPipe,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSelectModule,
    CommonModule,
    NgbModule,
    RouterModule,
    FormsModule,
    MatTableModule,
    SAdminModule,
    BrowserModule,
    GoogleChartsModule
    // AmplifyAngularModule

  ],


})
export class IUserModule { }
