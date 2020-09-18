import { Component, OnInit } from '@angular/core';
import { InfoData } from '../Info/infodatas';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  regInfos:Array<InfoData>;
  data:InfoData;
  ngname: string
  ngusername: string;
  ngemail: string;
  editing: boolean = false;
  constructor() {
    this.regInfos = new Array<InfoData>();
    this.data = new InfoData();
   }

  ngOnInit(): void {
  }

  
  onClear() {
    this.ngusername = '';
    this.ngname = '';
    this.ngemail = '';
  }

  onPost(datas){
    if(this.editing==false){
      this.regInfos.push(datas);
    }
    else{
      this.data.username=this.ngusername;
      this.data.name=this.ngname;
      this.data.email=this.ngemail;
    
      let index = this.regInfos.indexOf(this.data);
      this.regInfos[index] =this.data;
      console.log("Reginfos:",this.regInfos) 
      this.editing=false;
    }
    
  }

  editInfo(info) {
    this.editing = true;
    this.data=info;   
    this.ngusername = info.username;
    this.ngname = info.name;
    this.ngemail = info.email;
  }

}
