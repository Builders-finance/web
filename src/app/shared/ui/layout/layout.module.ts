import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/internal/components/components.module';
import { LoadingModule } from '../loading/loading.module';
import { FontawesomeSharedModule } from '../../fontawesome-shared/fontawesome-shared.module';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
@NgModule({
  declarations: [LayoutComponent, HeaderComponent],
  imports: [
    RouterModule,
    CommonModule,
    ComponentsModule,
    LoadingModule,
    FontawesomeSharedModule,
    MatIconModule,
    MatDialogModule,
    ComponentsModule
  ],
  exports: [],
  providers: [DatePipe]
})
export class LayoutModule { }
