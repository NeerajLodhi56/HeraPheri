import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
cmessage:string='where is my dinner'
  constructor() { }
greetingMsg:string="hello good morning sir , i m the msg which you want to delivered"
  ngOnInit(): void {
  }
  @Input()public ParentData: any;

  @Input() public DataStudent: any;
  @Output() msgEvent= new EventEmitter();
@Output() connectValue = new EventEmitter();
  sendMsg(){
this.msgEvent.emit(this.cmessage)
  }

  feedValue(){
    this.connectValue.emit(this.greetingMsg)
  }
}
