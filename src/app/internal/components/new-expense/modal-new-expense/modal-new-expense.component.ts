import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { finalize } from 'rxjs/operators';
import { NewExpenseComponent } from 'src/app/internal/components/new-expense/new-expense.component';
import { ToastService } from 'src/app/shared/components/toast/toast.service';
import { Transaction } from 'src/app/shared/models/transaction.model';
import { DataService } from 'src/app/shared/services/data';

@Component({
  selector: 'app-modal',
  templateUrl: './modal-new-expense.component.html',
  styleUrls: ['./modal-new-expense.component.scss']
})
export class ModalNewExpenseComponent implements OnInit {
  @ViewChild(NewExpenseComponent, { read: false })
  newExpenseLoadingTitle:string =""
  newExpenseLoadingText:string=""
  newExpenseShowLoading:boolean = false
  formValid : boolean = false
  displayFormErrors : boolean = false
  newExpense = {};
  transaction: Transaction;

  constructor(@Inject(DataService) private dataService: DataService,
  private toastService: ToastService,
  private datePipe: DatePipe,
  public dialogRef: MatDialogRef<ModalNewExpenseComponent>) { }

  ngOnInit() {
  }

  save(){

    this.displayFormErrors = true

    if(this.formValid){

      this.newExpenseLoadingText = 'Aguarde enquanto salvamos sua transação...'
      this.newExpenseLoadingTitle = "Aguarde um momento"
      this.newExpenseShowLoading = true;

      const dt = new Date(this.datePipe.transform(this.newExpense['date'],'yyyy-MM-dd'));


      this.transaction = {
        rev_exp_id: this.newExpense['category'].id,
        valor: parseFloat(this.newExpense['value']),
        forma_pagamento: this.newExpense['formaPagamento'].value,
        status_pagamento: this.newExpense['statusPagamento'].value,
        description: this.newExpense['notes'],
        data: dt
      }


      this.dataService.addTransaction(this.transaction)
        .pipe(
          finalize(() => {
            this.newExpenseShowLoading = false;
          }),
        )
        .subscribe(res => {
          if(res) {
            this.toastService.showSuccess('Transação salva com sucesso!');
            this.dialogRef.close();
          }
        }, err => {
          this.toastService.showDanger('Houve um erro inesperado, tente novamente mais tarde...');
        });
    }

  }

  validChanged(value){
    console.log('value chaged', value)
    this.formValid = value
  }

}
