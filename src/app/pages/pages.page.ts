import { Component, OnInit } from '@angular/core';
import { OnePage } from '../one/one.page';
import { TwoPage } from '../two/two.page';
import { ThreePage } from '../three/three.page';
import { FourPage } from '../four/four.page';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.page.html',
  styleUrls: ['./pages.page.scss'],
})
export class PagesPage implements OnInit {
  component = OnePage;
  constructor() { }

  ngOnInit() {
  }
  async canDismiss(data?: any, role?: string) {
    return role !== 'gesture';
  }
}
