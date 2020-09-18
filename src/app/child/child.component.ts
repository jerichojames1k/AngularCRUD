import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { InfoData } from '../Info/infodatas';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() registered:Array<InfoData>; 
  @Output() edit = new EventEmitter();
  constructor() { 
  }

  ngOnInit(): void {
  }

  onEdit(info) {
    this.edit.emit(info);
  }

  onDelete(id){
    this.registered.splice(id,1);
  }
  
}
