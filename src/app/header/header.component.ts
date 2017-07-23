import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  sitename = "The Will Will Web";
  siteurl = "http://blog.miniasp.com/";
  constructor() { }

  ngOnInit() {
  }

}
