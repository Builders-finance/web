import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/internal/components/components.module';
import { ModalNewExpenseComponent } from 'src/app/shared/ui/layout/modal-new-expense/modal-new-expense.component';
import { LoadingModule } from '../loading/loading.module';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, ModalNewExpenseComponent],
  imports: [
    RouterModule,
    CommonModule,
    ComponentsModule,
    LoadingModule
  ],
  exports: []
})
export class LayoutModule { }
