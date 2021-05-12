import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ComponentsModule } from 'src/app/internal/components/components.module';
import { ModalNewExpenseComponent } from 'src/app/shared/ui/layout/modal-new-expense/modal-new-expense.component';
import { LoadingModule } from '../loading/loading.module';
import { NewExpenseComponent } from 'src/app/internal/components/new-expense/new-expense.component';


@NgModule({
  declarations: [LayoutComponent, HeaderComponent, ModalNewExpenseComponent],
  entryComponents: [NewExpenseComponent, ModalNewExpenseComponent],
  imports: [
    RouterModule,
    CommonModule,
    AngularFontAwesomeModule,
    ModalModule,
    ComponentsModule,
    LoadingModule
  ],
  exports: []
})
export class LayoutModule { }
