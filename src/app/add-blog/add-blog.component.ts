import { Component, OnInit } from '@angular/core';
import { AppService } from './../app.service'
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {
  selected = 'Active';
  submitStatus = false

  constructor(public service: AppService, public formBuilder: FormBuilder, public router: Router) { }

  addForm: FormGroup = this.formBuilder.group({
    title: [, { validators: [Validators.required], updateOn: "change" }],
    subtitle: [, { validators: [Validators.required], updateOn: "change" }],
    description: [, { validators: [Validators.required], updateOn: "change" }],
    date: [, { validators: [Validators.required], updateOn: "change" }],
    status: [
      "Active",
      { validators: [Validators.required], updateOn: "change" },
    ],
  });


  ngOnInit(): void {
  }

  addblogForm(formDirective: any) {
    this.addForm.value['id'] = new Date().getTime();
    if (this.addForm.valid) {
      this.submitStatus = true;
      this.service.signUp(this.addForm.value).subscribe((res) => {
        console.log(res)
      })
      this.addForm.reset()
      formDirective.resetForm();
      this.router.navigate(['/'])
    }
  }

}
