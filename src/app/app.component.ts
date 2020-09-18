import { Component, OnInit } from '@angular/core';  
// // import {FormGroup,FormControl,Validators,FormsModule, } from '@angular/forms';  
// import {CommonService} from './common.service';  
// import { Info } from './Info/info';
// import {Http,Response, Headers, RequestOptions } from '@angular/http';   
// import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({  
  selector: 'app-root',  
  templateUrl: './app.component.html',  
  styleUrls: ['./app.component.css']
//   styles:[`
//   div{
//      margin: 0 auto;
//      text-align: center;
//      width:200px;
//   }
//   .rotate{
//      width:100px;
//      height:100px;
//      border:solid 1px red;
//   }
// `],
// animations: [
//   trigger('myanimation',[
//      state('smaller',style({
//         transform : 'translateY(100px)'
//      })),
//      state('larger',style({
//         transform : 'translateY(0px)'
//      })),
//      transition('smaller <=> larger',animate('300ms ease-in'))
//   ])
// ]
})  

export class AppComponent { 
    title = 'AngularCRUD';
    // id:string; 
    // name:string;
    // address:string;
    // data:Info;
    // state: string = "smaller";

   constructor() {  
     //this.data = new Info();
    }  
    
  // Repdata;  
   
ngOnInit() {    
  //this.newService.GetUser().subscribe(data =>  this.Repdata = data)  
}  


// animate() {
//    this.state= this.state == 'larger' ? 'smaller' : 'larger';
// }

// // ,isValid: boolean
// onSave = function(user) {    
//   console.log(user) 
//   this.newService.saveUser(user)  
//   .subscribe(data =>  {  alert(data.data);   
//     this.ngOnInit();    
//   }   
//   , error => this.errorMessage = error ) 
// }    

// Update = function() { 
//   this.data.id=this.id;
//   this.data.name=this.name;
//   this.data.address=this.address;   
//   console.log('Data:',this.data);
//   this.newService.updateUser(this.data) 
//   .subscribe(data =>  {  alert(data.data);   
//     this.ngOnInit();    
//   }   
//   , error => this.errorMessage = error ) 
// }  

// edit = function(kk) {  
// this.id = kk._id;  
// this.name= kk.name;  
// this.address= kk.address; 
// }  
  
// delete = function(id) {  
// this.newService.deleteUser(id)  
// .subscribe(data =>   { alert(data.data) ; this.ngOnInit();}, error => this.errorMessage = error )   
// }  
  
}  