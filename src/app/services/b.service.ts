import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BService {

  constructor() { }

  sayB(){
    console.log("Say B");
  }
}
