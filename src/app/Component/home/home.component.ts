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
@Input() cartitemslist:any;
  constructor(private router:Router, 
    private dataService: DataService,){}

    

  
  searchBook(event:any){
    this.dataService.sendBookDetails(event.target.value)
   
  }
  logOut(){
    localStorage.removeItem('token')
    this.router.navigateByUrl('/login')
  }


}
