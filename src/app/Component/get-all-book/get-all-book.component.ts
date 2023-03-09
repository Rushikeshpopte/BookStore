import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/service/bookService/book.service';

@Component({
  selector: 'app-get-all-book',
  templateUrl: './get-all-book.component.html',
  styleUrls: ['./get-all-book.component.scss']
})
export class GetAllBookComponent implements OnInit {
bookList=[];

constructor(private bookService:BookService){}
  ngOnInit() {
  this.getAllBooks()
  }

  getAllBooks(){
    this.bookService.getAllbook().subscribe((response:any)=>{
      console.log('get response',response);
      this.bookList=response.result;
      console.log('books are uploaded', this.bookList)
    })
  }
}
