import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IuserDashboardComponent } from 'src/app/iUser/iuser-dashboard/iuser-dashboard.component';
import { PRGComponent } from './prg/prg.component';
import { IuserSidebarComponent } from './iuser-sidebar/iuser-sidebar.component';
import { IuserNavigationComponent } from './iuser-navigation/iuser-navigation.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IuserMyRequestsComponent } from './iuser-my-requests/iuser-my-requests.component';
import { Routes,RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
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
import { GoogleChartsModule } from 'angular-google-charts';
import { SharedModuleModule } from '../shared-module/shared-module.module'
import { IuserGuardService } from '../guards/iuser-guard.service';

export const ROUTES:Routes = [
  {path: '', children: [
    {path: '', redirectTo:'dashboard', pathMatch:'full'},
    { path: 'dashboard', component: IuserDashboardComponent,canActivate: [IuserGuardService] },
    { path: 'prg/:id', component: PRGComponent,canActivate: [IuserGuardService] },
    { path: 'myRequest', component: IuserMyRequestsComponent,canActivate: [IuserGuardService] },
    { path: 'genTkt', component: GenTicketComponent,canActivate: [IuserGuardService] },
    { path: 'products', component: IuserProductsComponent,canActivate: [IuserGuardService] }
  ], canActivate:[IuserGuardService]}
]




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
    RouterModule.forChild(ROUTES),
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatCardModule,
    MatSelectModule,
    CommonModule,
    NgbModule,
    RouterModule,
    FormsModule,
    MatTableModule,
    GoogleChartsModule,
    SharedModuleModule
  ],
  exports: [RouterModule]
})
export class IUserModule { }
