
import { Injectable } from '@angular/core';   
import {Http,Response, Headers, RequestOptions, Request, XHRBackend,  RequestOptionsArgs } from '@angular/http';   
import { Info } from './Info/info';
import { Observable } from 'rxjs'; 
import 'rxjs/Rx'; 
import 'rxjs/add/operator/map'
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/do';  
import { keys } from 'lodash-es';
@Injectable({
  providedIn: 'root'
})  
export class CommonService {  
  constructor(private http: Http) { 
  }  

  saveUser(user){      
    return this.http.post('http://localhost:8080/SaveUser/', user)  
            .pipe(map((response: Response) =>response.json()))                
  }  
  
  GetUser(){      
    return this.http.get('http://localhost:8080/getUser/')  
            .pipe(map((response: Response) => response.json()))             
  } 
  
  updateUser(data:Info){     
      return this.http.put('http://localhost:8080/updateUser/',{'id':data.id,'name':data.name,'address':data.address})  
              .pipe(map((response: Response) =>response.json()))               
    }

 deleteUser(id){     
    return this.http.post('http://localhost:8080/deleteUser/:id',{'id': id})  
            .pipe(map((response: Response) =>response.json()))               
  }  
  
}  