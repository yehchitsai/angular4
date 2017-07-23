import { Component } from '@angular/core';
import { DataServiceService } from './data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  keyword = '123';
  constructor(public dataSvr: DataServiceService) { }
  doSearch(value: string) {
    this.keyword = value;
  }
  clear(evt: KeyboardEvent) {
    console.log(evt);
    const ESCAPE = 27;
    if (evt.keyCode === ESCAPE) {
      this.keyword = (evt.target as HTMLInputElement).value = '';
    }
  }
}
