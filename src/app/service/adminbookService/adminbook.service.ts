import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class AdminbookService {
  token:any;

  constructor(private httpService:HttpService) {
    this.token = localStorage.getItem('Admintoken')
   }
   
   addAdminBook(reqdata:any){
    let httpOption={
      headers:new HttpHeaders({
        'Content-type' : 'application/json',
        'x-access-token':this.token
      })
    }
    return this.httpService.PostService('bookstore_user/admin/add/book', reqdata, true, httpOption)
   }

   
   getAllBookAdmin(){
    let httpOption={
      headers:new HttpHeaders({
        'Content-type' : 'application/json',
        'x-access-token' : this.token
      })
    }
    return this.httpService.GetService('bookstore_user/get/book', false, httpOption)
   }
   deleteadminBook(){
    let httpOption={
      headers: new HttpHeaders({
        'Content-type' : 'application/json',
        'x-access-token' : this.token
      })
    }
    return this.httpService.DeleteService('bookstore_user/admin/delete/book/',true, httpOption)
   }

}
