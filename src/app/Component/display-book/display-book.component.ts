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
p:number=1;
itemsPerPage:number=5;
totalProduct:any;
booklist= [];
constructor(private bookService:BookService,
  private dataService:DataService,
  private router:Router){}
  ngOnInit() {
    this.bookService.getAllbook().subscribe((result:any)=>{
      console.log('display book dataservice', result);
      this.totalProduct=result.length;
      this.booklist=result.result;
      console.log('booklist is print',this.booklist);

    })

  }
   

  // sortBookByPrice(option: any) {
  //   if (option.value == 'low') {
  //     this.booklist.sort((a: any, b: any) => a.book.discountPrice - b.book.discountPrice);
  //     console.log('Books sorted by Price: Low to High')
  //   }
  //   else if (option.value == 'high') {
  //     this.booklist.sort((a: any, b: any) => Number(b.book.discountPrice) - Number(a.discountPrice));
  //     console.log('Books sorted by Price: High to Low')
  //   }
  //   else if (option.value == 'new') {
  //     this.booklist.sort((a: any, b: any) => Number(a.bookId) - Number(b.bookId));
  //     console.log('Books sorted by Sort by relevance')
  //   }
  //   console.log('hellow');
    
  // }

  lowtohigh() {
    this.booklist = this.booklist.sort((low: any, high: any) => Number(low?.discountPrice) - Number(high?.discountPrice));
    console.log('low value');
    
  }
  hightolow() {
    this.booklist = this.booklist.sort((low: any, high: any) => high.discountPrice - low.discountPrice);
  }
  newestarrivals() {
    this.booklist.reverse();
  }
  

  openDetailsBook(data:any){
    this.dataService.sendBookDetails(data);
    this.router.navigateByUrl('/home/quickview')
    
  }


}
