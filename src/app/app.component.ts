import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 public childMsg:string="hello i m child and  i m pruod of u r my father"
  title = 'herapheri';
 public message!: string;
public greet!:string;
  studentData:string="students Details here !";

  public newMsgShare !: string;
  recieveMsg($event:any){
    this.message=$event
  }
  
  rcvData($event:any){
    this.greet =$event
  }
  

  msgShare($event:any){
    this.newMsgShare=$event
  }
}
