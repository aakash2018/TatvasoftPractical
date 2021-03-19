import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
userInfo:any
data:any

  constructor() { 
    if(localStorage.getItem('userInfo')){
      this.userInfo = localStorage.getItem('userInfo')
    }
    this.data=JSON.parse(this.userInfo)
  }

  ngOnInit(): void {
    
  }

}
