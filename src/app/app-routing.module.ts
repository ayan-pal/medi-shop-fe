import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
import { SignupComponent } from './signup/signup.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'landing', component: LandingComponent},
  { path: 'construction', component: UnderConstructionComponent},
  { path: 'orders', component: OrdersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
