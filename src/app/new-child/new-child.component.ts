import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new-child',
  templateUrl: './new-child.component.html',
  styleUrls: ['./new-child.component.css']
})
export class NewChildComponent implements OnInit {

newChildMsg="hello i m new child plz share me"

@Output() dataShare =new EventEmitter;

  myNewChild(){
this.dataShare.emit(this.newChildMsg)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
