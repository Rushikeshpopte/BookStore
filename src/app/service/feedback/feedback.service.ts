import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  token:any;

  constructor(private httpService:HttpService) { 
    this.token=localStorage.getItem('token')
  }
  getallfeedback(bookId:any){
    let httpoption={
      headers : new HttpHeaders({
        'Content-type':'application/json',
        'x-access-token' : this.token
      })
    }
    return this.httpService.GetService('bookstore_user/get/feedback/'+bookId, true, httpoption)
  }
  addallfeedback(data:any){
    let httpoption={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'x-access-token' : this.token
      })
    }
    return this.httpService.PostService(`bookstore_user/add/feedback/${data.bookid}`,data, true,httpoption)



  }
}
