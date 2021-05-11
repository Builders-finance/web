import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NbCardModule } from '@nebular/theme';
import { TransactionsComponent } from './transactions.component';


@NgModule({
  declarations: [TransactionsComponent],
  imports: [
    CommonModule
  ]
})
export class transactionModule { }