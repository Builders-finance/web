import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserGuard } from '../shared/helpers/user.guard';
import { LayoutComponent } from '../shared/ui/layout/layout.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
      },
      {
        path: ':category/details',
        loadChildren: () => import('./pages/detail/detail.module').then(m => m.DetailModule),
      },
      {
        path: 'rev-exp',
        loadChildren: () => import('./pages/rev-exp/rev-exp.module').then(m => m.RevExpModule),
      }
    ],
    canActivate: [UserGuard],
  },
  {
    path: '**',
    component: LayoutComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InternalRoutingModule { }
