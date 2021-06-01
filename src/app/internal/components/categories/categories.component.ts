import { Component, OnInit, Inject, OnDestroy, Input, AfterViewInit, SimpleChanges } from '@angular/core';
import { Pagination } from 'src/app/shared/models/pagination.model';
import { TransactionDTO } from 'src/app/shared/models/transaction-dto.model';
import { DataService } from 'src/app/shared/services/data';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit, OnDestroy, AfterViewInit {
  _transactionsReceived: Pagination<TransactionDTO>
  @Input() set transactionsReceived(value: Pagination<TransactionDTO>){
    this._transactionsReceived = value;
    this.filterTransactions(null);
  }
  private _recDes: number | null = null;
  @Input() set recDes (value: number) {
    this._recDes = value ?? null;
    this.filterTransactions(this._recDes);
  }
  expensesSubscriber =  this.dataService.expenses;
  items: TransactionDTO[];
  public snapshot = {categories:[], expenses:[], total:0}

  constructor(@Inject(DataService) private dataService: DataService) {}

  ngOnInit() {  }

  ngAfterViewInit() {

  }

  filterTransactions(recDes: number|null){
    this.items = {...this._transactionsReceived}.items;
    if(this._transactionsReceived && this._transactionsReceived.total > 0 && recDes !== null){
      this.items = this.items.filter(item => item.rec_des == recDes)
    }
  }

  saveTransactionLocal(transaction: TransactionDTO) {
    localStorage.setItem('transactionDetail', JSON.stringify(transaction))
  }



  ngOnDestroy(){
    if(this.expensesSubscriber){
    }
  }

}
