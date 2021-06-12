import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeModule } from './main/home/home.module';
import { AdminModule } from './main/admin/admin.module';
import { AuthModule } from './auth/auth.module';

// Import your library
import { ModalModule } from './main/home/-modal/-modal.module';
import { BrowserModule } from '@angular/platform-browser';
// Animation
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthInterceptor } from '../app/core/interceptors/auth.interceptor';
import { AlertComponent } from './shared/alert/alert.component';
import { DialogComponent } from './shared/dialog/dialog.component';
@NgModule({
  declarations: [AppComponent, AlertComponent, DialogComponent],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    HomeModule,
    AdminModule,
    ModalModule,
    BrowserModule,
    AuthModule,
    NgbModule,
  ],
  providers: [AuthInterceptor],
  bootstrap: [AppComponent],
})
export class AppModule {}
