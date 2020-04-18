import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerateTicketComponent } from './generate-ticket/generate-ticket.component';
import { XuserDashboardComponent } from './xuser-dashboard/xuser-dashboard.component';
import { XuserNavigationComponent } from './xuser-navigation/xuser-navigation.component';
import { XuserSidebarComponent } from './xuser-sidebar/xuser-sidebar.component';
import { XuserPrgComponent } from './xuser-prg/xuser-prg.component';
import { XuserMyRequestsComponent } from './xuser-my-requests/xuser-my-requests.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule} from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SAdminModule } from '../sAdmin/s-admin.module';



@NgModule({
  declarations: [GenerateTicketComponent, XuserDashboardComponent, XuserNavigationComponent, XuserSidebarComponent, XuserPrgComponent, XuserMyRequestsComponent],
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
    SAdminModule],
})
export class XUserModule { }
