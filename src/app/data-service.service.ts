import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DataServiceService {
  data;
  deleteArticle(target) {
    const idx = this.data.indexOf(target);
    this.data.splice(idx, 1);
  }
  constructor(private http: Http) {
    this.http.get('/api/articles.json')
    .subscribe(res => {
        this.data = res.json();
      });
/*      .subscribe(function(res){
    //      this.data = res.json();
    //      console.log(this.data);
          return res.json();
      });
      console.log(this.data);
  //this.data = this.data.toString();
*/
/*
    .subscribe(res => {
        this.data = res.json();
      });
*/
  }

}
