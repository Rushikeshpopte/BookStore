import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './Component/login/login.component';
import { SignupComponent } from './Component/signup/signup.component';
import { AppRoutingModule } from './app-routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './Component/home/home.component';
import { MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { DisplayBookComponent } from './Component/display-book/display-book.component';
import { GetAllBookComponent } from './Component/get-all-book/get-all-book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthguardService } from './service/authguardService/authguard.service';
import { QuickviewComponent } from './Component/quickview/quickview.component';
import { CartComponent } from './Component/cart/cart.component';
import {MatRadioModule} from '@angular/material/radio';
import { OrdersummeryComponent } from './Component/ordersummery/ordersummery.component';
import { WishlistComponent } from './Component/wishlist/wishlist.component';
import { NgxPaginationModule } from 'ngx-pagination';
import {MatSelectModule} from '@angular/material/select';
import { PipefilterPipe } from './service/pipeService/pipefilter.pipe';
import {MatMenuModule} from '@angular/material/menu';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSnackBarModule} from '@angular/material/snack-bar';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    DisplayBookComponent,
    GetAllBookComponent,
    QuickviewComponent,
    CartComponent,
    OrdersummeryComponent,
    WishlistComponent,
    PipefilterPipe,
  
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatRadioModule,
    NgxPaginationModule,
    MatSelectModule,
    MatMenuModule,
    MatBadgeModule,
    MatSnackBarModule,
    FormsModule
    
  ],
  providers: [AuthguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
