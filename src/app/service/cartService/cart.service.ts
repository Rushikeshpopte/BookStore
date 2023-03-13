import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  token: any;

  constructor(private httpService:HttpService) {
    this.token= localStorage.getItem('token')
   }

   addToBag(data:any){
    let header ={
      headers:new HttpHeaders({
        'content-type':'application/json',
        'x-access-token' : this.token
      })
    }
    console.log('add to bag', this.token);
    return this.httpService.PostService('bookstore_user/add_cart_item/'+ data.bookid,{}, true, header)
  
  }

  getallbooks(){
    let header ={
      headers: new HttpHeaders({
        'content-type':'application/json',
        'x-access-token' : this.token
      })
    }
     console.log('get all book from cart', this.token);
     return this.httpService.GetService('bookstore_user/get_cart_items',true,header)
     
  }


}
