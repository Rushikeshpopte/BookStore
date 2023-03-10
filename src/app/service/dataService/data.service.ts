import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  private openBook= new BehaviorSubject([]);
   getAllBook= this.openBook.asObservable();

  sendBookDetails(book:any){
    this.openBook.next(book)
  }

}
