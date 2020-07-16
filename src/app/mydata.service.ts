import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { News } from './news';

@Injectable({
  providedIn: 'root'
})
export class MydataService {

  url : string;
  constructor(private httpcli : HttpClient) {
    this.url="http://localhost:3000/news";
   }


  addNews(newsobj : News) : Observable<News>
  {
    return this.httpcli.post<News>(this.url,newsobj);
  }

  getNews() : Observable<Array<News>>
  {
    return this.httpcli.get<Array<News>>(this.url);
  }

}
