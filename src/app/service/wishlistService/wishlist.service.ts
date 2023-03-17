import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  token: any;

  constructor(private httpService: HttpService) {
    this.token=localStorage.getItem('token')
  }
   addtoWishlist(data:any){
    let header={
      headers:new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token
      })
    }
    
    console.log('wishlist added success', this.token);
   return this.httpService.PostService( 'bookstore_user/add_wish_list/'+data.bookid,{}, true, header)
   }
   getwishlistBook(){
    let header={
      headers:new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token
        
      })
      
    }
    console.log('get all wishlist', this.token);
    return this.httpService.GetService('bookstore_user/get_wishlist_items', true, header)
   }

   deletewishList(data:any){
    let header={
      headers:new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token,
      })
    }
    console.log('remove wishlist',this.token );
    return this.httpService.DeleteService('bookstore_user/remove_wishlist_item/'+ data?.product_id?._id, true, header)

  }


}
