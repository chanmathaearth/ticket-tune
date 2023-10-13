import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { BookingComponent } from './page/booking/booking.component';
import { PaymentComponent } from './page/payment/payment.component';
import { ProfileComponent } from './page/profile/profile.component';
import { SigninComponent } from './page/signin/signin.component';
import { SignupComponent } from './page/signup/signup.component';
import { DetailComponent } from './page/detail/detail.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'detail/:id',
    component: DetailComponent,
  },
  {
    path: 'booking',
    component: BookingComponent,
  },
  {
    path: 'payment',
    component: PaymentComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'signin',
    component: SigninComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
