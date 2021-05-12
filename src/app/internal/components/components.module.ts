import { NgxMaskModule } from 'ngx-mask';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories/categories.component';
import { ActivitiesComponent } from './activities/activities.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { DetailsComponent } from './details/details.component';
import { RouterModule } from '@angular/router';
import { NewExpenseComponent } from './new-expense/new-expense.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import {AutocompleteLibModule} from 'angular-ng-autocomplete'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BsDropdownModule } from 'ngx-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { UiModule } from '../../shared/ui/ui.module';


@NgModule({
  declarations: [CategoriesComponent, ActivitiesComponent, DetailsComponent, NewExpenseComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    RouterModule,
    AutocompleteLibModule,
    BsDatepickerModule,
    BsDropdownModule,
    AccordionModule,
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
