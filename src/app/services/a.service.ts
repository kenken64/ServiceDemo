import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AService {

  constructor() { }

  sayA(){
    console.log("Say A");
  }
}
