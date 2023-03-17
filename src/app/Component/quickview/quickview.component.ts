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
  constructor(private dataService:DataService,
    private cartService:CartService,
    private wishlist:WishlistService){}

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

}
