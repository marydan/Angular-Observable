import { Component, OnInit } from '@angular/core';
import { CalcuService } from '../calcu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private calserve : CalcuService) { }
 title : string ="";
  ngOnInit(): void {

    this.title=this.calserve.callDetails("USTG");
  }



}
