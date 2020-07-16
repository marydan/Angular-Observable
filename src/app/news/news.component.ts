import { Component, OnInit } from '@angular/core';
import { News } from '../news';
import { MydataService } from '../mydata.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {


  news : News;
  newsarr : Array<News>=[];

  constructor(private dataserve : MydataService) {
    this.news=new News();
   }
 
  ngOnInit(): void 
  {
 this.getAllRecords();   
  }

 addRecord()
 {
   this.newsarr.push(this.news);

   this.dataserve.addNews(this.news)
   .subscribe(
     (result)=>
     {
 //      this.newsarr.push(result);
       this.news=new News();
     
     },
     (err) =>
     {
       
       document.getElementById("errinfo").innerText=err;
     }
  );
   this.getAllRecords();
 }

 getAllRecords()
 {
   this.dataserve.getNews().subscribe(
     (newsrecords)=>
     {
       this.newsarr=newsrecords;
     },
     (err)=>
     {
      document.getElementById("errinfo").innerText=err;
     }
   )
 }


}
