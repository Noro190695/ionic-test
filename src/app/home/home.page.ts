import { Component } from '@angular/core';
import { PagesPage } from '../pages/pages.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  component = PagesPage
  constructor() {}
  async canDismiss(data?: any, role?: string) {
    return role !== 'gesture';
  }

}
