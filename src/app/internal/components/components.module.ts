import { NgxMaskModule } from 'ngx-mask';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories/categories.component';
import { ActivitiesComponent } from './activities/activities.component';
import { RouterModule } from '@angular/router';
import { NewExpenseComponent } from './new-expense/new-expense.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiModule } from '../../shared/ui/ui.module';
import { FontawesomeSharedModule } from 'src/app/shared/fontawesome-shared/fontawesome-shared.module';
import { ModalNewExpenseComponent } from './new-expense/modal-new-expense/modal-new-expense.component';
import { MaterialSharedModule } from 'src/app/shared/material-shared/material-shared.module';


@NgModule({
  declarations: [CategoriesComponent, ActivitiesComponent, NewExpenseComponent, ModalNewExpenseComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    FontawesomeSharedModule,
    MaterialSharedModule,
    NgxMaskModule,
    UiModule
  ],
  exports:[
    CategoriesComponent,
    ActivitiesComponent,
    ModalNewExpenseComponent,
    RouterModule
  ]
})
export class ComponentsModule { }
