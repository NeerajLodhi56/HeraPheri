import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-babu',
  templateUrl: './babu.component.html',
  styleUrls: ['./babu.component.css']
})
export class BabuComponent implements OnInit {
students:any[];
  constructor() {
    this.students=[
      {
        id:1,
        name:"Abhi",
        gender:"male",
        salary:65000,
        age:21,
        course:"btch"

      },
      {
        id:2,
        name:"nelu",
        gender:"female",
        salary:75000,
        age:25,
        course:"btch"

      },
      {
        id:3,
        name:"Aishu",
        gender:"female",
        salary:65000,
        age:24,
        course:"mcom"

      },
      {
        id:4,
        name:"Nbhi",
        gender:"male",
        salary:55000,
        age:19,
        course:"bsc"

      }
    ];
   }

  ngOnInit(): void {
  }
clrvalue="blue"
name:string="Abhi"
}
