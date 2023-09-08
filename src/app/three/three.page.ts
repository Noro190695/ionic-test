import { Component, OnInit } from '@angular/core';
import { OnePage } from '../one/one.page';
import { TwoPage } from '../two/two.page';
import { FourPage } from '../four/four.page';

@Component({
  selector: 'app-three',
  templateUrl: './three.page.html',
  styleUrls: ['./three.page.scss'],
})
export class ThreePage implements OnInit {
  one = OnePage;
  two = TwoPage;
  four = FourPage;
  constructor() { }

  ngOnInit() {
  }

}
