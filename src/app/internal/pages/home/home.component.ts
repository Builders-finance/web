import { Component, OnInit, Inject, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { DataService } from 'src/app/shared/services/data';
import { TransactionDTO } from 'src/app/shared/models/transaction-dto.model';
import { Pagination } from 'src/app/shared/models/pagination.model';
import * as moment from 'moment';
import { Months } from 'src/app/shared/constants/months';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  recDesSelected: number = null;
  days: number[] = Array(31).fill(1).map((x,i)=> (i+1));
  daySelected: string = '';
  monthSelected: number = parseInt(moment().format('M'));
  yearSelected: string = moment().format('YYYY');
  transactions: Pagination<TransactionDTO>;
  recItems: any;
  desItems: any;
  public snapshot = {categories:[], expenses:[], total:0}

  constructor(@Inject(DataService) private dataService: DataService, public months: Months) {}

  ngOnInit(): void {

    this.totalValue();
    this.dataService.refreshTransaction
      .subscribe(() => {
        this.totalValue();
      })
  }

  public totalValue() {
    let filter = {day: this.daySelected, month: this.monthSelected, year: this.yearSelected};
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

  selectDate(type, numberDate?) {
    switch(type) {
      case 'day':
        this.daySelected = numberDate ?? moment().format('DD');
        break;
      case 'month':
        this.monthSelected = numberDate ?? moment().format('MM');
      break;
      case 'year':
        this.yearSelected = numberDate ?? moment().format('YYYY');
      break;
    }
    this.totalValue();
  }

}
