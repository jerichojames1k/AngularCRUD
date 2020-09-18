import { BrowserModule } from '@angular/platform-browser';  
import { NgModule } from '@angular/core';   
  
import { HttpModule } from '@angular/http';  
import { FormsModule } from '@angular/forms';  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';  
import { Routes, RouterModule } from '@angular/router';
import {CommonService} from './common.service';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { HomedataComponent } from './homedata/homedata.component';  
  
const appRoutes:Routes=[
  {path:'',component:ParentComponent},
  {path:'child',component:ChildComponent},
  {path:'home',component:HomedataComponent},
];

@NgModule({  
  declarations: [  
    AppComponent, ChildComponent, ParentComponent, HomedataComponent  
  ],  
  imports: [  
    BrowserModule,HttpModule,FormsModule,BrowserAnimationsModule,RouterModule.forRoot(appRoutes)  
  ],  
  providers: [CommonService],  
  bootstrap: [AppComponent]  
})  
export class AppModule { }  