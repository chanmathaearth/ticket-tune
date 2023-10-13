import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeNGModule } from './modules/primeng.module';
import { HomeComponent } from './page/home/home.component';
import { BookingComponent } from './page/booking/booking.component';
import { SigninComponent } from './page/signin/signin.component';
import { SignupComponent } from './page/signup/signup.component';
import { ProfileComponent } from './page/profile/profile.component';
import { PaymentComponent } from './page/payment/payment.component';
import { TopbarComponent } from './component/topbar/topbar.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { DetailComponent } from './page/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookingComponent,
    SigninComponent,
    SignupComponent,
    ProfileComponent,
    PaymentComponent,
    TopbarComponent,
    SidebarComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PrimeNGModule
  ],
  providers: [
    MessageService,
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
