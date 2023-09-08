import { Component, OnInit } from '@angular/core';
import { ThreePage } from '../three/three.page';
import { OnePage } from '../one/one.page';
import { FourPage } from '../four/four.page';

@Component({
  selector: 'app-two',
  templateUrl: './two.page.html',
  styleUrls: ['./two.page.scss'],
})
export class TwoPage implements OnInit {
  one = OnePage;
  three = ThreePage;
  four =FourPage;
  constructor() { }

  ngOnInit() {
  }

}
