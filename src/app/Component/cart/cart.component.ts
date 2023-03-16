import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from 'src/app/service/cartService/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  cartbook: any =[];
  placeorder=true;
  adress=true;
  show=false;
  continueshopping=true;
  ordersummery= true;
  validateForm !: FormGroup;
  addressType:any[]=['Home','work','others']
  constructor(
    private cartService:CartService,
    private formBuilder:FormBuilder){}
  ngOnInit() {
    this.getallbook()
    this.validateForm = this.formBuilder.group({
      fullName: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
    })
   
  }

  getallbook(){
    this.cartService.getallbooks().subscribe((result:any)=>{
      this.cartbook =result.result;
      console.log(this.cartbook);
      
    })
  }


  placOrder(){

  }
  addressDetails(){
    this.placeorder = false;
    this.adress=false

  }
  
  continue(){
    this.continueshopping=false;
    this.ordersummery=false;
    // this.adress=true
  }

  deleteItem(Book:any) {
    console.log(Book)
    this.cartService.removeItem(Book).subscribe((res: any) => {
      console.log(res)
      location.reload();
    })
  }
  close(){
    this.continueshopping=false;
    this.ordersummery=false;
    console.log('enter data');
 
    this.show = false;
    console.log('valid data', this.validateForm.value);
    let formdata = {
      addressType: this.addressType,
      fullAddress:this.validateForm.value.address,
      city: this.validateForm.value.city,
      state: this.validateForm.value.state,
    }
    console.log(formdata);
    
    this.cartService.customerdetails(formdata).subscribe((result: any) => {
      console.log('details', result);
    })
  }
}
