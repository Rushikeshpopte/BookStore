import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cartService/cart.service';
import { DataService } from 'src/app/service/dataService/data.service';
import { WishlistService } from 'src/app/service/wishlistService/wishlist.service';

@Component({
  selector: 'app-quickview',
  templateUrl: './quickview.component.html',
  styleUrls: ['./quickview.component.scss']
})
export class QuickviewComponent implements OnInit {
  Book: any;
  removecart:boolean=true;
  showcount:boolean=false;
  hideMatBadge : boolean=true;
  badgeCounter: number=1;
  constructor(private dataService:DataService,
    private cartService:CartService,
    private wishlist:WishlistService){
      this.hideMatBadge = true;
      this.badgeCounter = 1;
    }

ngOnInit(){


  this.dataService.getAllBook.subscribe((result:any)=>{
    this.Book =result;
    console.log('quickview data',this.Book);
    

  })
}
addtoCart(){
  let data={
    bookid:this.Book._id,

  }
  console.log('addtocart', data);
  console.log(this.Book._id);
  this.cartService.addToBag(data).subscribe((result:any)=>{
    console.log('call api add to cart', result);
    
  })
  
}
addwishlistBook(){
  let data={
    bookid:this.Book._id,

  }
  console.log('addtowishlist', data);
  console.log(this.Book._id);
  this.wishlist.addtoWishlist(data).subscribe((response:any)=>{
    console.log('result sucess wishlist',response);
  })

}
showcart(){
  this.removecart=false;
  this.showcount=true;
}
increment() {
  this.badgeCounter++;
  this.hideMatBadge = false;
}
decrement(){ 
  if(this.badgeCounter < 0)
   return;
  this.badgeCounter--;
  if(this.badgeCounter == 0){
    this.hideMatBadge = true;
  }
}

}
