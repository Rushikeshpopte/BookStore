import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/dataService/data.service';

@Component({
  selector: 'app-display-book',
  templateUrl: './display-book.component.html',
  styleUrls: ['./display-book.component.scss']
})
export class DisplayBookComponent implements OnInit {
@Input()bookArray:any;
constructor(private dataService:DataService,
  private router:Router){}
  ngOnInit() {
    this.dataService.getAllBook.subscribe((result:any)=>{
      console.log('display book dataservice', result);
      
    })


  }

  openDetailsBook(data:any){
    this.dataService.sendBookDetails(data);
    this.router.navigateByUrl('/home/quickview')
    
  }


}
