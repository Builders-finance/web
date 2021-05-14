import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading.component';
import { FontawesomeSharedModule } from '../../fontawesome-shared/fontawesome-shared.module';

@NgModule({
  declarations: [LoadingComponent],
  imports: [
    CommonModule,
    FontawesomeSharedModule
  ],
  exports:[
    LoadingComponent
  ]
})
export class LoadingModule { }
