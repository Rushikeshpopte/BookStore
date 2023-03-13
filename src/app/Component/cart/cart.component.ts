import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cartService/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  cartbook: any =[];
  constructor(
    private cartService:CartService){}
  ngOnInit() {
    this.getallbook()
   
  }

  getallbook(){
    this.cartService.getallbooks().subscribe((result:any)=>{
      this.cartbook =result.result;
      console.log(this.cartbook);
      
    })
  }

}
