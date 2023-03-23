import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/service/bookService/book.service';
import { DataService } from 'src/app/service/dataService/data.service';

@Component({
  selector: 'app-display-book',
  templateUrl: './display-book.component.html',
  styleUrls: ['./display-book.component.scss']
})
export class DisplayBookComponent implements OnInit {
@Input()bookArray:any;
p:number=0 ;
itemsPerPage:number=8;
totalProduct:any;
booklist= [];
// bookId: Number = 0;
searchBook: string = '';
constructor(private bookService:BookService,
  private dataService:DataService,
  private router:Router){}
  ngOnInit() {
    // this.bookService.getAllbook().subscribe((result:any)=>{
    //   console.log('display book dataservice', result);
    //   this.totalProduct=result.length;
    //   this.booklist=result.result;
    //   this.searchBook = result;
    //   console.log('booklist is print',this.booklist);


    // })
    this.dataService.getAllBook.subscribe((result:any)=>{
      console.log('display book dataservice', result);
      this.searchBook = result;
      this.totalProduct=result.length;
        this.booklist=result.result;
    })
  }
   

  sortBookByPrice(option: any) {
    if (option.value == 'Price: Low to High') {
      // this.bookArray.sort((a: any, b: any) => Number(a.discountPrice) - Number(b.discountPrice));
      this.bookArray.sort((a:any,b:any)=> a.discountPrice-b.discountPrice)
      console.log('Books sorted by Price: Low to High')
    }
    else if (option.value == 'Price: High to Low') {
      this.bookArray.sort((a: any, b: any) => Number(b.discountPrice) - Number(a.discountPrice));
      console.log('Books sorted by Price: High to Low')
    }
    else if (option.value == 'Sort by relevance') {
      this.bookArray.sort((a: any, b: any) => Number(a.bookId) - Number(b.bookId));
      console.log('Books sorted by Sort by relevance')
    }
    else if (option.value == 'Newest Arrivals') {
      this.bookArray.reverse()
    }
  }
  openDetailsBook(data:any){
    this.dataService.sendBookDetails(data);
    this.router.navigateByUrl('/quickview')
    
  }


}
