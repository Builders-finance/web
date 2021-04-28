import { RevExp } from './../../shared/models/revExp.model';
import { Component, OnInit, Inject, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { DataService } from 'src/app/shared/services/data';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Pagination } from 'src/app/shared/models/pagination.model';
import { PaymentStatus, PaymentType } from 'src/app/shared/models/transaction.model';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { ptBrLocale } from 'ngx-bootstrap/locale';
import { BsLocaleService } from 'ngx-bootstrap';
defineLocale('pt-br', ptBrLocale);

@Component({
  selector: 'app-new-expense',
  templateUrl: './new-expense.component.html',
  styleUrls: ['./new-expense.component.scss']
})
export class NewExpenseComponent implements OnInit {

  categories: RevExp[];
  bsValue = new Date();
  maxDate = new Date();
  categorySelected = {}

  formasPagamento = [
    {name: 'Débito', value: PaymentType.debit},
    {name: 'Crédito', value: PaymentType.credit},
    {name: 'PIX', value: PaymentType.pix},
    {name: 'Dinheiro', value: PaymentType.cash},
    {name: 'Boleto', value: PaymentType.bill},
  ];

  statusPagamentos = [
    {name: 'Pago', value: PaymentStatus.paid},
    {name: 'Não pago', value: PaymentStatus.unpaid},
    {name: 'Parcial', value: PaymentStatus.partial},
  ]

  statusPagamento = this.statusPagamentos[0];


  @Input()
  data = {}

  @Input()
  displayErrors :boolean = false

  @Output()
  dataChange = new EventEmitter()

  @Output()
  isValid= new EventEmitter()

  formGroupExpense = new FormGroup({
    value: new FormControl('', [Validators.required, Validators.min(0)]),
    category: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    formaPagamento: new FormControl(this.formasPagamento[0], Validators.required),
    statusPagamento: new FormControl(this.statusPagamentos[0], Validators.required),
    notes: new FormControl(''),
  });

  constructor(@Inject(DataService) private dataService: DataService, private localeService: BsLocaleService) {
    localeService.use('pt-br');
  }

  ngOnInit() {

    this.dataService.getCategories().subscribe((response: Pagination<RevExp>) => {
      this.categories = response.data
    })

    // this.categories = Object.entries(this.dataService.categories).map(i=> { return{ name: i[0], value:i[1], search: i[1].name }})
    // console.log(this.categories)
    this.maxDate.
    setDate(this.maxDate.getDate() + 7);

    this.formGroupExpense.valueChanges.subscribe(value=> {console.log(value), this.dataChange.emit(value), this.isValid.emit(this.formGroupExpense.valid)})
  }

  onChange(fp) {
    this.formGroupExpense.patchValue({
      formaPagamento: fp,
    });
  }

  onChangeStatus(sp) {
    this.formGroupExpense.patchValue({
      statusPagamento: sp,
    });
  }

  get formaPagamento() {
    return this.formGroupExpense.get('formaPagamento').value;
  }

  get formGroupControls(){
    return this.formGroupExpense.controls;
  }

}
