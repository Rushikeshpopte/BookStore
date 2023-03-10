import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/dataService/data.service';

@Component({
  selector: 'app-quickview',
  templateUrl: './quickview.component.html',
  styleUrls: ['./quickview.component.scss']
})
export class QuickviewComponent implements OnInit {
  Book: any;
  constructor(private dataService:DataService){}

ngOnInit(){


  this.dataService.getAllBook.subscribe((result:any)=>{
    this.Book =result;
    console.log('quickview data',this.Book);
    

  })
}
}
