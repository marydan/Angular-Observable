import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MymaterialsModule } from './mymaterials/mymaterials.module';
 
import  {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NewsComponent } from './news/news.component';
import {HttpClient,HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const rout : Routes =[
 
  {
    path:'dashbrd',
    component:DashboardComponent,
    children:[
          {
          path:'home',
          component: HomeComponent 
          },
          {
          path:'mynews',
          component: NewsComponent
          } ,
          {
            path:'',
            redirectTo:'home',
            pathMatch:'full'
          }
    ]
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  }


]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MymaterialsModule,
    FormsModule,
    HttpClientModule,
      
    ReactiveFormsModule,
    RouterModule,
    RouterModule.forRoot(rout)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
