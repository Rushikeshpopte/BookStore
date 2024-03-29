import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Component/login/login.component';
import { SignupComponent } from './Component/signup/signup.component';
import { HomeComponent } from './Component/home/home.component';
import { GetAllBookComponent } from './Component/get-all-book/get-all-book.component';
import { AuthenticationGuard } from './authentication.guard';
import { QuickviewComponent } from './Component/quickview/quickview.component';
import { CartComponent } from './Component/cart/cart.component';
import { OrdersummeryComponent } from './Component/ordersummery/ordersummery.component';
import { WishlistComponent } from './Component/wishlist/wishlist.component';
import { AdminDashboardComponent } from './Component/admin-dashboard/admin-dashboard.component';
import { AdminloginComponent } from './Component/adminlogin/adminlogin.component';

const routes:Routes = [
  {path: '', redirectTo:"/login", pathMatch:'full'},
  {path: 'login', component:LoginComponent},
  {path:'adminlogin', component:AdminloginComponent},
  {path: 'adminDashboard', component:AdminDashboardComponent},
  {path:'signup', component:SignupComponent},
  {path: 'quickview', component:QuickviewComponent},
  {path:'home', component:HomeComponent,canActivate:[AuthenticationGuard],
 children:[{path:'displaybook', component:GetAllBookComponent,},
{path:'cart', component:CartComponent},
{path: 'order', component:OrdersummeryComponent},
{path: 'wishlist', component:WishlistComponent}]},

]


@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
