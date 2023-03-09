import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  token: any;

  constructor(private httpService:HttpService) { }



getAllbook(){
  let httpOption={
    headers : new HttpHeaders({
      'content-type':'application/json',
    
    })
  }
  return this.httpService.GetService(
    'bookstore_user/get/book',
    false,
    httpOption
  )
  }
}
