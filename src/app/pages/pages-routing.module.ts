import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesPage } from './pages.page';
import { OnePage } from '../one/one.page';
import { TwoPage } from '../two/two.page';
import { ThreePage } from '../three/three.page';
import { FourPage } from '../four/four.page';

const routes: Routes = [
  {
    path: 'pages',
    component: PagesPage,
    children: [
      {
        path: 'one',
        component: OnePage,
        loadChildren: () => import('../one/one.module').then(m => m.OnePageModule)
      },
      {
        path: 'two',
        component: TwoPage,
        loadChildren: () => import('../two/two.module').then(m => m.TwoPageModule)
      },
      {
        path: 'three',
        component: ThreePage,
        loadChildren: () => import('../three/three.module').then(m => m.ThreePageModule)
      },
      {
        path: 'four',
        component: FourPage,
        loadChildren: () => import('../four/four.module').then(m => m.FourPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesPageRoutingModule {}
