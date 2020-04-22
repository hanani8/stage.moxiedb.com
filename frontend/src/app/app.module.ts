import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from './app.component';
import { SAdminModule } from 'src/app/sAdmin/s-admin.module';
import { FormsModule } from '@angular/forms';
import { AdminModule } from 'src/app/Admin/admin.module';
import { IUserModule } from 'src/app/iUser/i-user.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { CognitoService } from './serviceAws/cognito.service';
import { TokenService } from './tokenResolver/token.service';
import { AdminRedirectComponent } from './utility/admin-redirect/admin-redirect.component';
import { IuserRedirectComponent } from './utility/iuser-redirect/iuser-redirect.component';
import { XuserRedirectComponent } from './utility/xuser-redirect/xuser-redirect.component';
// import { AuthGuard } from './auth.guard';
import { XUserModule } from 'src/app/xUser/x-user.module';
import { SadminRedirectComponent } from './utility/sadmin-redirect/sadmin-redirect.component';




@NgModule({
  declarations: [
    AppComponent,
    AdminRedirectComponent,
    IuserRedirectComponent,
    XuserRedirectComponent,
    SadminRedirectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SAdminModule,
    FormsModule,
    AdminModule,
    IUserModule,
    BrowserAnimationsModule,
    XUserModule
  ],
  providers: [TokenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
