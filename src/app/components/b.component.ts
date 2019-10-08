import { Component, OnInit } from '@angular/core';
import { BService } from '../services/b.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {

  constructor(private bService: BService) { }

  ngOnInit() {
    console.log("B Component");
    this.bService.sayB();
  }

 

}
