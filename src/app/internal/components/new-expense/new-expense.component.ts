import { RevExp } from '../../../shared/models/revExp.model';
import { Component, OnInit, Inject, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/shared/services/data';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Pagination } from 'src/app/shared/models/pagination.model';
import { PaymentStatus, PaymentType } from 'src/app/shared/models/transaction.model';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import * as moment from 'moment';
import { AutoCompleteService } from 'src/app/shared/services/auto-complete.service';
import { map, startWith } from 'rxjs/operators';
import { ResponsePagination } from 'src/app/shared/models/response.model';

export const MY_FORMATS = {
  parse: {
    dateInput: 'L',
  },
  display: {
    dateInput: 'L',
    monthYearLabel: 'DD/MM/YYYY',
    dateA11yLabel: 'L',
    monthYearA11yLabel: 'DD/MM/YYYY',
  },
};
@Component({
  selector: 'app-new-expense',
  templateUrl: './new-expense.component.html',
  styleUrls: ['./new-expense.component.scss'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ]
})
export class NewExpenseComponent implements OnInit {

  categories: RevExp[];
  bsValue = new Date();
  maxDate = new Date();
  categorySelected = {}
  filteredCategories: any;
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

  constructor(@Inject(DataService) private dataService: DataService, public autoCompleteService: AutoCompleteService) {

  }

  ngOnInit() {

    this.dataService.getCategories().subscribe((response: ResponsePagination<RevExp>) => {
      this.categories = response.data.items;
      this.filteredCategories = this.formGroupExpense.controls.category.valueChanges
          .pipe(
            startWith(''),
            map(model => model ?
              this.autoCompleteService.filterAutoComplete(model, this.categories, this.formGroupExpense.controls.category.value) : this.categories.slice())
          );
    })

    // this.categories = Object.entries(this.dataService.categories).map(i=> { return{ name: i[0], value:i[1], search: i[1].name }})
    // console.log(this.categories)
    this.maxDate.setDate(this.maxDate.getDate() + 7);

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

  get statusPagamento() {
    return this.formGroupExpense.get('statusPagamento').value;
  }

  get formGroupControls(){
    return this.formGroupExpense.controls;
  }

}
