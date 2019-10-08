import { Component, OnInit } from '@angular/core';
import { AService } from '../services/a.service';
import { BService } from '../services/b.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {

  constructor(private svcA: AService, 
    private svcB: BService) { 
      console.log("A Component - Constructor");
      this.svcA.sayA();
    }

  ngOnInit() {
    console.log("A Component");
    this.svcB.sayB();
  }

  pressBtn(){
    console.log("Press Button !");
    this.svcB.sayB();
  }

}
