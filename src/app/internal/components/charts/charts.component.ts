import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { ChartOptions, ChartType } from 'chart.js';
import { CurrencyPipe } from '@angular/common';
import { Label } from 'ng2-charts';
import * as Chart from 'chart.js';
import { Pagination } from 'src/app/shared/models/pagination.model';
import { TransactionDTO } from 'src/app/shared/models/transaction-dto.model';

export function currencyAsFunction(money){
  let currencyPipe = new CurrencyPipe('pt-BR');
  return currencyPipe.transform(money, 'BRL');
}

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit, OnDestroy {
  totalLegend: number = 0;
  allData: TransactionDTO[];
  @Input() set data(data: TransactionDTO[]) {
    this.totalLegend = 0;
    this.allData = data;
    this.setDataChart();
  }
  // Pie
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        color: '#fff',
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };;

  public pieChartLabels: Label[] = [];
  public pieChartData: any[] = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = false;
  public pieChartPlugins = [ChartDataLabels];
  public pieChartColors = [];

  constructor() {
    Chart.plugins.unregister(ChartDataLabels);
  }

  ngOnInit(): void {
    this.totalLegend = 0;
    if(this.allData && this.allData.length > 0) {
      this.setDataChart();
    }
  }

  setDataChart() {
    this.pieChartData = [];
    this.pieChartLabels = [];
    this.pieChartColors = [{backgroundColor: []}]
    this.pieChartOptions.tooltips = {
        callbacks: {
          label: function(tooltipItem, data) {
            return currencyAsFunction(data.datasets[0].data[tooltipItem.index])
          },
        }
      }
    this.pieChartOptions.elements = {arc: {borderWidth: 0}};
    this.allData.forEach(item => {
      this.pieChartLabels.push(item.nome);
      this.totalLegend += item.valor;
      this.pieChartData.push(item.valor);
      this.pieChartColors[0].backgroundColor.push(this.getRandomColor());
    });
  }

  getRandomColor() {
    var color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
  }

  ngOnDestroy() {
    this.totalLegend = 0;
    this.pieChartData = [];
    this.pieChartLabels = [];
  }


}
