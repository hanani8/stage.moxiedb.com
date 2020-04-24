import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerateTicketComponent } from './generate-ticket/generate-ticket.component';
import { XuserDashboardComponent } from './xuser-dashboard/xuser-dashboard.component';
import { XuserNavigationComponent } from './xuser-navigation/xuser-navigation.component';
import { XuserSidebarComponent } from './xuser-sidebar/xuser-sidebar.component';
import { XuserPrgComponent } from './xuser-prg/xuser-prg.component';
import { XuserMyRequestsComponent } from './xuser-my-requests/xuser-my-requests.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule} from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { Routes ,RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SAdminModule } from '../sAdmin/s-admin.module';
import { XuserGuardService } from '../guards/xuser-guard.service';

export const ROUTES:Routes = [
  { path: '', component: XuserDashboardComponent,canActivate: [XuserGuardService]},
  { path: 'prg/:id', component: XuserPrgComponent,canActivate: [XuserGuardService]},
  { path: 'generate-ticket', component: GenerateTicketComponent,canActivate: [XuserGuardService]},
  { path: 'my-requests', component: XuserMyRequestsComponent,canActivate: [XuserGuardService]}
]

@NgModule({
  declarations: [GenerateTicketComponent, XuserDashboardComponent, XuserNavigationComponent, XuserSidebarComponent, XuserPrgComponent, XuserMyRequestsComponent],
  imports: [
    RouterModule.forChild(ROUTES),
    CommonModule,
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
    SAdminModule],
})
export class XUserModule { }
