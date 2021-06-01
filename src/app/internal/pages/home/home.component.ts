import { Component, OnInit, Inject, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { DataService } from 'src/app/shared/services/data';
import { TransactionDTO } from 'src/app/shared/models/transaction-dto.model';
import { Pagination } from 'src/app/shared/models/pagination.model';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  recDesSelected: number = null;
  dateSelected: string = 'month';
  transactions: Pagination<TransactionDTO>;
  recItems: any;
  desItems: any;
  public snapshot = {categories:[], expenses:[], total:0}

  constructor(@Inject(DataService) private dataService: DataService, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {

    this.totalValue({month: moment().format('MM')});
    this.dataService.refreshTransaction
      .subscribe(() => {
        this.totalValue({month: moment().format('MM')});
      })
  }

  public totalValue(filter?) {
    this.dataService.loadTransactions(filter).subscribe((response: any) => {
      this.transactions = response.data as Pagination<TransactionDTO>;
      this.recItems = this.transactions.items.filter(item => item.rec_des == 1)
      this.desItems = this.transactions.items.filter(item => item.rec_des == 2)
    });
  }

  changeTab(event){
    this.recDesSelected = event.index;
    if(event.index === 0) {
      this.recDesSelected = null;
    }
  }

  selectDate(type) {
    this.dateSelected = type;
    let filter = {};
    switch(type) {
      case 'day':
        filter = Object.assign(filter, {day: moment().format('DD')})
        break;
      case 'month':
        filter = Object.assign(filter, {month: moment().format('MM')})
      break;
      case 'year':
        filter = Object.assign(filter, {year: moment().format('YYYY')})
      break;
    }
    this.totalValue(filter);
  }

}
