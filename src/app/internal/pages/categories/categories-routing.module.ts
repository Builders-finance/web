import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuard } from 'src/app/shared/helpers/user.guard';
import { CategoriesComponent } from './categories.component';

const routes: Routes = [
  {
    path: '',
    component: CategoriesComponent,
    canActivate: [UserGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
