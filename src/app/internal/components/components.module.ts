import { NgxMaskModule } from 'ngx-mask';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories/categories.component';
import { ActivitiesComponent } from './activities/activities.component';
import { DetailsComponent } from './details/details.component';
import { RouterModule } from '@angular/router';
import { NewExpenseComponent } from './new-expense/new-expense.component';
import {AutocompleteLibModule} from 'angular-ng-autocomplete'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { UiModule } from '../../shared/ui/ui.module';


@NgModule({
  declarations: [CategoriesComponent, ActivitiesComponent, DetailsComponent, NewExpenseComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AutocompleteLibModule,
    NgxMaskModule,
    UiModule
  ],
  exports:[
    CategoriesComponent,
    ActivitiesComponent,
    DetailsComponent,
    NewExpenseComponent,
    RouterModule
  ]
})
export class ComponentsModule { }
