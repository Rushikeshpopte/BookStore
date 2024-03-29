import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  BaseUrl ='https://bookstore.incubation.bridgelabz.com/'


  PostService(url:string, reqdata:any, token:boolean,httpOption:any){
    return this.httpClient.post(this.BaseUrl + url, reqdata, token && httpOption)
  }
  GetService(url:string, token:boolean=false, httpOption:any){
    return this.httpClient.get(this.BaseUrl + url, token && httpOption)
  }
  DeleteService(url:string, token:boolean=true, httpOption:any){
    return this.httpClient.delete(this.BaseUrl + url, token && httpOption)
  }
  PutService(url:string, reqdata:any, token:boolean=true,  httpOption:any){
    return this.httpClient.put(this.BaseUrl + url, reqdata, token && httpOption)
  }
}
