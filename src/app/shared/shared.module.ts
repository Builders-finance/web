import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastComponent } from './components/toast/toast.component';
import { MaterialSharedModule } from './material-shared/material-shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontawesomeSharedModule } from './fontawesome-shared/fontawesome-shared.module';

@NgModule({
 imports: [
   CommonModule,
   MaterialSharedModule,
   FontawesomeSharedModule,
   NgbModule
  ],
 declarations: [
    ToastComponent,
  ],
 exports: [ CommonModule, FormsModule, MaterialSharedModule, FontawesomeSharedModule, NgbModule, ToastComponent ]
})
export class SharedModule { }
