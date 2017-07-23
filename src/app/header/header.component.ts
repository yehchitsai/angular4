import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  sitename = "The Will Will Web";
  siteurl = "http://blog.miniasp.com/";
  subtitle = "記載著 Will 在網路世界的學習心得與技術分享";
  setRed = false;
  constructor() { }

  ngOnInit() {
  }
  changeTitle(){
    this.subtitle = this.sitename;
    this.setRed = !this.setRed;
  }

}
