import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminbookService } from 'src/app/service/adminbookService/adminbook.service';
import { UpdatebookComponent } from '../updatebook/updatebook.component';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  bookAdminArray:any;
  // bookName: string='';
  // author:string='';
  // quantity:string='';
  // price:Number=0;
  // discountPrice:Number=0;
  // data:any;
  // Book:any;
  constructor(private adminBookService:AdminbookService, public dialog: MatDialog ){
    localStorage.getItem('token')
  }

  ngOnInit() {
    this.getAllBook();  
  }
  getAllBook(){
    this.adminBookService.getAllBookAdmin().subscribe((response:any)=>{
      console.log('getallbook in admin',response);
      this.bookAdminArray= response.result;
    })

  }
openDialog(bookObj: any) {
  const dialogRef = this.dialog.open(UpdatebookComponent, {
    data: bookObj
  })
  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}

}
