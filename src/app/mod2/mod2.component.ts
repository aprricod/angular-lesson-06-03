import { Component, OnInit } from '@angular/core';
import { Mod2Service } from './mod2.service';

@Component({
  selector: 'app-mod2',
  templateUrl: './mod2.component.html',
  styleUrls: ['./mod2.component.css'],
})
export class Mod2Component implements OnInit {
  constructor(public mod2: Mod2Service) {}

  ngOnInit(): void {
    this.mod2.square();
  }
}
