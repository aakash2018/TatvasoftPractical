import { Component, OnInit } from '@angular/core';
import { AppService } from './../app.service'
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  selected = 'Admin';
  formGroup: any = FormGroup;
  submitStatus = false

  constructor(public service: AppService, public formBuilder: FormBuilder, public router: Router) { }

  registerForm: FormGroup = this.formBuilder.group({
    firstName: [, { validators: [Validators.required], updateOn: "change" }],
    lastName: [, { validators: [Validators.required], updateOn: "change" }],
    email: [
      ,
      {
        validators: [Validators.required, Validators.email],
        updateOn: "change",
      },
    ],
    password: [, { validators: [Validators.required], updateOn: "change" }],
    dob: [, { validators: [Validators.required], updateOn: "change" }],
    role: [
      "Admin",
      { validators: [Validators.required], updateOn: "change" },
    ],
  });

  ngOnInit(): void {}

  submitForm(formDirective: any) {
    this.registerForm.value['id'] = new Date().getTime();
    if (this.registerForm.valid) {
      this.submitStatus = true;
      this.service.signUp(this.registerForm.value).subscribe((res) => {
        console.log(res)
      })
      this.registerForm.reset()
      formDirective.resetForm();
      this.router.navigate(['/'])
    }
  }

}
