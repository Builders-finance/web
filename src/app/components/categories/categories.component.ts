import { Component, OnInit, Inject, OnDestroy, Input } from '@angular/core';
import { TransactionDTO } from 'src/app/shared/models/transaction-dto.model';
import { DataService } from 'src/app/shared/services/data';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit, OnDestroy {

  @Input() transactions: TransactionDTO[];
  expensesSubscriber =  this.dataService.expenses;
  public snapshot = {categories:[], expenses:[], total:0}

  constructor(@Inject(DataService) private dataService: DataService) {

         }

  ngOnInit() {
    console.log('trans', this.transactions)
  }

  saveTransactionLocal(transaction: TransactionDTO) {
    localStorage.setItem('transactionDetail', JSON.stringify(transaction))
  }



  ngOnDestroy(){
    if(this.expensesSubscriber){
    }
  }

}
