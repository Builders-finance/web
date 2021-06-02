import { Component, OnInit, Inject, OnDestroy, Input, AfterViewInit, SimpleChanges } from '@angular/core';
import { Pagination } from 'src/app/shared/models/pagination.model';
import { TransactionDTO } from 'src/app/shared/models/transaction-dto.model';
import { DataService } from 'src/app/shared/services/data';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit, AfterViewInit, OnDestroy {
  _transactionsReceived: Pagination<TransactionDTO>
  @Input() set items(value: TransactionDTO[]){
    this._items = [...value];
  }
  expensesSubscriber =  this.dataService.expenses;
  _items: TransactionDTO[];
  public snapshot = {categories:[], expenses:[], total:0}

  constructor(@Inject(DataService) private dataService: DataService) {}

  ngOnInit() { }

  ngAfterViewInit() {

  }


  saveTransactionLocal(transaction: TransactionDTO) {
    localStorage.setItem('transactionDetail', JSON.stringify(transaction))
  }



  ngOnDestroy(){
    if(this.expensesSubscriber){}
  }

}
