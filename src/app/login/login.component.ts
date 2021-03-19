import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from './../app.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup: any = FormGroup;
  submitStatus = false
  constructor(public service: AppService, public formBuilder: FormBuilder, public router: Router) { }
  loginForm: FormGroup = this.formBuilder.group({
    email: [
      ,
      {
        validators: [Validators.required, Validators.email],
        updateOn: "change",
      },
    ],
    password: [, { validators: [Validators.required], updateOn: "change" }],
  });

  ngOnInit(): void {
  }

  signInForm(formDirective: any) {
    if (this.loginForm.valid) {
      this.submitStatus = true;
      this.service.signUp(this.loginForm.value).subscribe((res) => {
        localStorage.setItem("userInfo", JSON.stringify(res));
      })
      this.loginForm.reset()
      formDirective.resetForm();
      this.router.navigate(['/blog'])
    }
  }
}
