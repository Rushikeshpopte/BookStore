import { Component, OnInit } from '@angular/core';
import { WishlistService } from 'src/app/service/wishlistService/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit{
  wishList: any=[]
  constructor( private wishlist:WishlistService){}
  ngOnInit(){
    this.getwishlistBook()
    
  }

  getwishlistBook(){
    this.wishlist.getwishlistBook().subscribe((response:any)=>{
      this.wishList=response.result
      console.log('result sucess wishlist',response);
      console.log('newlist',this.wishList);
      
    })

  }
  deletewishList(data:any){
    this.wishlist.deletewishList(data).subscribe((response:any)=>{
      console.log('wishlist delete',response);
      console.log('book delete',data);

      
    })
    

  }
 
}
