import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common'
@Injectable({
  providedIn: 'root'
})
export class MyrouteService {

  constructor(private myroute : Router,private loca : Location) { }

  openHome()
  {
  this.myroute.navigate(['home']);
  }
  openNews()
  {
 this.myroute.navigate(['mynews']);
  }
  openDashboard()
  {
    this.myroute.navigate(['dashbrd']);
  }

  goBack()
  {
    this.loca.back();
  }

}
