import { Component, OnInit, Inject, TemplateRef, ViewChild, ElementRef, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { DataService } from './shared/services/data';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DatePipe } from '@angular/common';
import { NewExpenseComponent } from './components/new-expense/new-expense.component';
import { PaymentStatus, PaymentType, Transaction } from './shared/models/transaction.model';

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
  private datePipe: DatePipe) {
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
        rev_exp_id: this.newExpense['category'].id,
        user_id: "c6fe52a9-2eba-47a2-87ec-61a44c25ac8a",
        valor: parseFloat(this.newExpense['value']),
        forma_pagamento: this.newExpense['formaPagamento'].value,
        status_pagamento: this.newExpense['statusPagamento'].value,
        description: this.newExpense['notes'],
        data: dt
      }

      // this.dataService.addTransaction(this.newExpense).subscribe(res => {
      //   console.log(res);
      // })

      // this.dataService.add(
      //   this.newExpense['category'].name,
      //   parseFloat(this.newExpense['value']),
      //   this.datePipe.transform(this.newExpense['date'],'yyyy-MM-dd'),
      //   this.newExpense['location'],
      //   this.newExpense['notes'])

        let modal =this.modalRef
        let loading =this.newExpenseShowLoading
        setTimeout(function(){
          loading = false
          modal.hide()
        },600)
    }

  }

  validChanged(value){
    console.log('value chaged', value)
    this.formValid = value
  }
}
