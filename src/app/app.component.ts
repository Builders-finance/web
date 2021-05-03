import { Component, OnInit, Inject, TemplateRef, ViewChild, ElementRef, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { DataService } from './shared/services/data';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DatePipe } from '@angular/common';
import { NewExpenseComponent } from './components/new-expense/new-expense.component';
import { PaymentStatus, PaymentType, Transaction } from './shared/models/transaction.model';
import { ToastrService } from 'ngx-toastr';
import {  finalize } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {


  title = 'Builders Finance Control App';
  modalRef: BsModalRef;
  config = {
    backdrop: true,
    ignoreBackdropClick: false
  };

  newExpense = {};
  transaction: Transaction;

  newExpenseLoadingTitle:string =""
  newExpenseLoadingText:string=""
  newExpenseShowLoading:boolean = false
  formValid : boolean = false
  displayFormErrors : boolean = false
  //@ViewChild('expensesForm', {static:true, read: ElementRef}) expensesForm: ElementRef;
  @ViewChild(NewExpenseComponent, {read:false, static:true})
  expensesForm: NewExpenseComponent;

  constructor(@Inject(DataService) private dataService: DataService,
  private modalService: BsModalService,
  private datePipe: DatePipe,
  private toastr: ToastrService
  ) {
  }

  ngOnInit(): void {
    this.dataService.generate()
  }

  ngAfterViewInit(): void {

    console.log('this.primarySampleComponent',this.expensesForm)
  }

  open(template: TemplateRef<any>) {
    this.newExpenseShowLoading = false
    this.displayFormErrors = false
    this.formValid = false
    this.modalRef = this.modalService.show(template,this.config);
  }

  save(){

    this.displayFormErrors = true

    if(this.formValid){

      this.newExpenseLoadingText = 'Aguarde enquanto salvamos sua transação...'
      this.newExpenseLoadingTitle = "Aguarde um momento"
      this.newExpenseShowLoading = true;

      const dt = new Date(this.datePipe.transform(this.newExpense['date'],'yyyy-MM-dd'));


      this.transaction = {
        transaction_rev_exp_id: this.newExpense['category'].id,
        transaction_user_id: "c6fe52a9-2eba-47a2-87ec-61a44c25ac8a",
        transaction_valor: parseFloat(this.newExpense['value']),
        transaction_forma_pagamento: this.newExpense['formaPagamento'].value,
        transaction_status_pagamento: this.newExpense['statusPagamento'].value,
        transaction_description: this.newExpense['notes'],
        transaction_data: dt
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

      // this.dataService.add(
      //   this.newExpense['category'].name,
      //   parseFloat(this.newExpense['value']),
      //   this.datePipe.transform(this.newExpense['date'],'yyyy-MM-dd'),
      //   this.newExpense['location'],
      //   this.newExpense['notes'])
    }

  }

  validChanged(value){
    console.log('value chaged', value)
    this.formValid = value
  }
}
