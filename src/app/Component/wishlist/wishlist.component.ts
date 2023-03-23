import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { WishlistService } from 'src/app/service/wishlistService/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit{
  wishList: any=[]
  constructor( private wishlist:WishlistService,
    private snackbar:MatSnackBar){}
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
    this.snackbar.open('wiahlist delete Sucessfully', '', {
      duration: 3000,
      verticalPosition: 'bottom',
    });
    this.getwishlistBook();
    

  }
 
}
