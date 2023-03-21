import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/userService/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  signinForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private router:Router,
    private snackbar:MatSnackBar) { }
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

      this.userService.login(data).subscribe((response: any) => {
        console.log('login in successful', response);
        localStorage.setItem('token',response.result.accessToken) 
        this.router.navigateByUrl('/home/displaybook')

      });
      this.snackbar.open('Login is Sucessfully', '', {
        duration: 3000,
        verticalPosition: 'bottom',
      });

    }

  }

}
