import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cartService/cart.service';
import { DataService } from 'src/app/service/dataService/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private router:Router, 
    private dataService: DataService,
    private cartService:CartService){}

    cartitemslist:string='';

  
  searchBook(event:any){
    this.dataService.sendBookDetails(event.target.value)
   
  }
  logOut(){
    localStorage.removeItem('token')
    this.router.navigateByUrl('/login')
  }
  getcartDetails(){
      this.cartService.getallbooks().subscribe((response:any)=>{
        console.log("Retrived All Cart Items", response.data);
        this.cartitemslist = response.data.length;
        
      })

  }

}
