import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Mod2Service {
  a: number = 10;
  b: number = 10;

  constructor() {}

  square() {
    return this.a * this.b;
  }
}
