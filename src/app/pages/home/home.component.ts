import { Component, OnInit, Inject } from '@angular/core';
import { DataService } from 'src/app/shared/services/data';
import { Chart } from 'chart.js';
import { Pagination } from 'src/app/shared/models/pagination.model';
import { Transaction } from 'src/app/shared/models/transaction.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  chart:any = {}
  total = 0
  summary = []
  transactions: Transaction[];

  constructor(@Inject(DataService) private dataService: DataService) {

      }    ngOnInit(): void {

    this.dataService.expenses.subscribe(data=> {
      this.updateChart()
    })

    this.updateChart();
    this.totalValue();
  }

  public totalValue() {
    this.dataService.loadTransactions().subscribe((response: Pagination<Transaction>) => {
      this.transactions = response.data;
    });
  }

  get totalVal() {
    let total = this.transactions ? this.transactions.map(tr => tr.valor).reduce((a,b) => a+b): 0;
    return total
  }

  updateChart(){

    this.summary=this.dataService.summary;
    // this.total = this.summary.length > 0  ?this.summary.map(s=>s.total).reduce((a,b)=>a+b): 0;
    const labels =  this.summary.map(e=>e.category.name)
    const data = this.summary.map(c=>c.total)

    const colors =[  'rgb(207, 169, 200)','rgb(235, 149, 83,1)','rgb(74, 184, 147)','rgb(232, 93, 87)']

    this.chart = new Chart('chart', {
      type: 'doughnut',
      data: {
          labels: labels,
          datasets: [{
              data: data,
              backgroundColor: colors,
              borderWidth:0
          }]
      },
      options: {
        responsive:true,
        cutoutPercentage: 0,
        legend: {
          display: false,
      }
    }

    });
  }

}
