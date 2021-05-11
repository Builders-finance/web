import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { NbCardModule } from '@nebular/theme';
import { LoginComponent } from './login/login.component';
import { TransactionsComponent } from './transactions/transactions.component';

@NgModule({
  declarations: [LoginComponent, TransactionsComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
