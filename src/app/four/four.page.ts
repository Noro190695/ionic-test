import { Component, OnInit } from '@angular/core';
import { OnePage } from '../one/one.page';
import { TwoPage } from '../two/two.page';
import { ThreePage } from '../three/three.page';

@Component({
  selector: 'app-four',
  templateUrl: './four.page.html',
  styleUrls: ['./four.page.scss'],
})
export class FourPage implements OnInit {
  one = OnePage;
  two = TwoPage;
  three = ThreePage;
  constructor() { }

  ngOnInit() {
  }

}
