import { Component, OnInit } from '@angular/core';
import { TwoPage } from '../two/two.page';
import { ThreePage } from '../three/three.page';
import { FourPage } from '../four/four.page';

@Component({
  selector: 'app-one',
  templateUrl: './one.page.html',
  styleUrls: ['./one.page.scss'],
})
export class OnePage implements OnInit {
  two = TwoPage;
  three = ThreePage;
  four = FourPage;
  constructor() { }

  ngOnInit() {
  }

}
