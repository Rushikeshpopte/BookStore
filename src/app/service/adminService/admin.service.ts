import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import { IadminLogin, IadminsignUp } from '../modal/data';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  token:any;

  constructor(private httpService:HttpService) { }
  adminlogin(reqdata:IadminLogin){
    let httpOption={
      headers : new HttpHeaders({
        'Content-type' : 'application/json',
        'authorization': this.token,
      })
    }
    console.log('admin is successful login', reqdata);
    return this.httpService.PostService('bookstore_user/admin/login',reqdata,false,httpOption)
  }
  adminsignup(reqdata:IadminsignUp){
    let httpOption={
      headers: new HttpHeaders({
        'Content-type' : 'application/json',
        'authorization': this.token
      })
    }
    console.log('admin signUp', reqdata);
    return this.httpService.PostService('bookstore_user/admin/registration', reqdata,false,httpOption)
    
  }
}
