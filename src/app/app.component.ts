import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  keyword = '123';
  doSearch(evt: KeyboardEvent) {
    this.keyword = (evt.target as HTMLInputElement).value;
  }
  clear(evt: KeyboardEvent) {
    console.log(evt);
    const ESCAPE = 27;
    if (evt.keyCode === ESCAPE) {
      this.keyword = (evt.target as HTMLInputElement).value = '';
    }
  }
}
