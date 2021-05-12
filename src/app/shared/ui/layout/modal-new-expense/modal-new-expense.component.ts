import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { finalize } from 'rxjs/operators';
import { NewExpenseComponent } from 'src/app/internal/components/new-expense/new-expense.component';
import { Transaction } from 'src/app/shared/models/transaction.model';
import { DataService } from 'src/app/shared/services/data';

@Component({
  selector: 'app-modal',
  templateUrl: './modal-new-expense.component.html',
  styleUrls: ['./modal-new-expense.component.scss']
})
export class ModalNewExpenseComponent implements OnInit {
  @ViewChild(NewExpenseComponent, {read:false, static:true})
  modalRef: BsModalRef;
  config = {
    backdrop: true,
    ignoreBackdropClick: false
  };
  newExpenseLoadingTitle:string =""
  newExpenseLoadingText:string=""
  newExpenseShowLoading:boolean = false
  formValid : boolean = false
  displayFormErrors : boolean = false
  newExpense = {};
  transaction: Transaction;

  constructor(@Inject(DataService) private dataService: DataService,
  private modalService: BsModalService,
  private datePipe: DatePipe,
  private toastr: ToastrService) { }

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
        user_id: "c6fe52a9-2eba-47a2-87ec-61a44c25ac8a",
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
            this.modalRef.hide();
          }),
        )
        .subscribe(res => {
          if(res) {
            this.toastr.success('Sucesso!', 'Transação salva com sucesso!');
          }
        }, err => {
          this.toastr.error('Erro!', 'Houve um erro inesperado, tente novamente mais tarde...');
        });
    }

  }

  validChanged(value){
    console.log('value chaged', value)
    this.formValid = value
  }

}
