import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import { ISignup, IUserLogin } from '../modal/data';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token: any;

  constructor(private httpService:HttpService) {}


login(reqdata:IUserLogin){
  let httpOption={
    headers: new HttpHeaders({
      'Content-type' : 'application/json',
      'authorization': this.token,
    })
  }
  console.log('data success', reqdata)
  return this.httpService.PostService('bookstore_user/login' , reqdata, false, httpOption )

}
signUp(reqdata:ISignup){
  let httpOption={
    headers: new HttpHeaders({
      'Content-type' : 'application/json',
      'authorization': this.token,
    })
  }
  console.log("data success", reqdata)
  return this.httpService.PostService('bookstore_user/registration', reqdata, false, httpOption)


}
}