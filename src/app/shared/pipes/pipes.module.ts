import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstLastNamePipe } from './first-last-name.pipe';
import { GroupByPipe } from './group-by.pipe';

@NgModule({
  declarations: [
    FirstLastNamePipe,
    GroupByPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FirstLastNamePipe,
    GroupByPipe
  ],
  providers: [
    FirstLastNamePipe,
    GroupByPipe
  ]
})
export class PipesModule { }
