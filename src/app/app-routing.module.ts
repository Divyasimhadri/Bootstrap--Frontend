import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


const routes: Routes = [
  { path: '',   redirectTo: '/home-component', pathMatch: 'full' },
  {path:'home-component',component :HomeComponent},
  {path:'checkout-component',component:CheckoutComponent},
  {path:'complaint-component',component:ComplaintComponent},
  {path:'register-component',component:RegisterComponent},
  {path:'signin-component',component:SigninComponent},
  {path:'**',component:PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[HomeComponent,CheckoutComponent,ComplaintComponent,SigninComponent,RegisterComponent,PagenotfoundComponent]