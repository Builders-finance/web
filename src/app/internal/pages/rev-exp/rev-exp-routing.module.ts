import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuard } from 'src/app/shared/helpers/user.guard';
import { RevExpComponent } from './rev-exp.component';
const routes: Routes = [
  {
    path: '',
    component: RevExpComponent,
    canActivate: [UserGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RevExpRoutingModule { }
