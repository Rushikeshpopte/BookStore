import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/adminService/admin.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent {
  signinForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
    private router:Router,
    private snackbar:MatSnackBar,
    private adminService:AdminService) { }
  ngOnInit() {
    this.signinForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]

    })

  }
  onsubmit() {
    this.submitted = true;
    if (this.signinForm.valid) {
      console.log('onsubmit function called', this.signinForm.value);

      let data =
      {
        email: this.signinForm.value.email,
        password: this.signinForm.value.password,
      }
      this.adminService
      .adminlogin(data).subscribe((response:any)=>{
        console.log('admin login successful', response);
        localStorage.setItem('Admintoken', response.result.accessToken)
        this.router.navigateByUrl('/adminDashboard')
        
      })
      
      this.snackbar.open('Login is Sucessfully', '', {
        duration: 3000,
        verticalPosition: 'bottom',
      });

    }

  }
  displaychangeuser(){
    console.log('admin is log in');
    this.router.navigateByUrl('/login')
    }
    displayadmin(){
      this.router.navigateByUrl('/adminlogin')
    }
  
 

}
