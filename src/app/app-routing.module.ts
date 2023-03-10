import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Component/login/login.component';
import { SignupComponent } from './Component/signup/signup.component';
import { HomeComponent } from './Component/home/home.component';
import { GetAllBookComponent } from './Component/get-all-book/get-all-book.component';
import { AuthenticationGuard } from './authentication.guard';
import { QuickviewComponent } from './Component/quickview/quickview.component';
import { CartComponent } from './Component/cart/cart.component';

const routes:Routes = [
  {path: '', redirectTo:"/login", pathMatch:'full'},
  {path: 'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'home', component:HomeComponent,canActivate:[AuthenticationGuard],
 children:[{path:'displaybook', component:GetAllBookComponent,},
 { path:'quickview', component:QuickviewComponent},
{path:'cart', component:CartComponent}]},

]


@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
