import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MyrouteService } from '../myroute.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  userid : FormControl;
  password: FormControl;

  constructor(private routobj : MyrouteService) {
    this.userid=new FormControl('',Validators.required);
    this.password=new FormControl('',Validators.minLength(6));
   }

   checkId() :string
   {
     if(this.userid.touched)
     {
     let result=this.userid.hasError("required") ? "Name can not be null" : "";

     return result;
     }
    

   }

   checkPassword() : string
   {
     if (this.password.invalid)
     {
       return "Password lenght should be >6";
     }
   }
   
   getValue()
   {
     this.routobj.openDashboard();
   }

  ngOnInit(): void {
  }

}
