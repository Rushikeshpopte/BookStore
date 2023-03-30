import { Component, Inject, inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminbookService } from 'src/app/service/adminbookService/adminbook.service';

@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.scss']
})
export class UpdatebookComponent {
  bookName: string='';
  author:string='';
  quantity:string='';
  price:any;
  discountPrice:any;
  Book:any;

  constructor(private adminBookService:AdminbookService, public dialogRef: MatDialogRef<UpdatebookComponent>,
  @Inject(MAT_DIALOG_DATA) public data:any){
    console.log('getting data',data);
    
  }
  onNoClick(): void {
    this.dialogRef.close();
  }


  addAdminBook(){
    let data={
      bookName:this.bookName,
      author:this.author,
      discountPrice:this.discountPrice,
      price:this.price,
      quantity:this.quantity,
    }
    this.adminBookService.addAdminBook(data).subscribe((response:any)=>{
      console.log('admin book added successfully', response);
      
    })

  }

}
