import { Component, OnInit, Inject } from '@angular/core';
import { DataService } from 'src/app/shared/services/data';
import { ActivatedRoute, Router } from '@angular/router';
import { Chart } from 'chart.js';
import { DatePipe,CurrencyPipe } from '@angular/common';
// import { debug } from 'util';
import { Transaction } from 'src/app/shared/models/transaction.model';
import { GroupByPipe } from 'src/app/shared/pipes/group-by.pipe';
import { ResponseModel } from 'src/app/shared/models/response.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ViewTransactionComponent } from '../../components/view-transaction/view-transaction.component';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  categoryLink:string = ""
  category:any = {}
  categories = []
  data = []
  labels=[]
  categoryId: any;
  total = 0;
  balanceDay = 0;
  chart:any = {}
  categoryColor ='rgb(207, 169, 200, 0.8)'
  selected = {}
  items:any;

  constructor(@Inject(DataService) private dataService: DataService,
  private router: Router,
  private datePipe: DatePipe,
  private currencyPipe: CurrencyPipe, private groupByPipe: GroupByPipe,
  public dialog: MatDialog , private media: MediaMatcher) {
  }

   ngOnInit() {
    this.load();
    this.categories = Object.entries(this.dataService.categories)
  }

  async load(){
    this.categoryId = JSON.parse(localStorage.getItem('transactionDetail'));
    this.dataService.getTransactionsByRevExpId(this.categoryId.id).subscribe(async (res: ResponseModel<Transaction[]>) => {
      this.items = await this.groupByPipe.transform(res.data, 'data', 'valor');
      this.loadChart();
      this.total = res.data.length > 0 ? res.data.map(i => i.valor).reduce((a,b) => a + b) : 0;
      console.log(this.items);
    });
  }



  loadChart() {
    const labels  = []
    const colors =[]
    let chartData = this.items.sort((a,b)=> new Date(a.key) > new Date(b.key)? 1: -1)
    chartData = this.items.map(c => {
      const date = this.datePipe.transform(c.key,'dd/MMM');
      labels.push(date);
      colors.push(this.categoryColor)
      return {
        x: date,
        y: c.total,
        legend: this.currencyPipe.transform(c.total, 'BRL')
      }
    })

      this.chart = new Chart('chartCategory', {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                data: chartData,
                backgroundColor: colors,
                borderColor:'rgb(207, 169, 200)',
                borderWidth:1
            }]
        },
        options: {
          responsive:true,
          legend: {
            display: false,
          },
          tooltips: {
            backgroundColor: 'rgb(232, 93, 87,0.8)',
            callbacks: {
              label: function(tooltipItem, chart) {
                // const legend = chart.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].legend
                return ''
              }
          }
          },
          scales: {
            xAxes:[{
              gridLines:{
                display:false
              },
              ticks:{
                fontColor: '#ffffff'
              }
            }],
            yAxes:[{
              gridLines:{
                display:true,
                color: 'rgb(207, 169, 200, 0.5)'
              },
              ticks:{
                fontColor: 'rgb(255,255,255, 0.8)',
                beginAtZero: true
              }
            }]
          }
        }
      });
  }

  open(url){

    console.log('open',url)
    this.router.navigate([url+'/details'])
    this.load()

  }

  viewTransaction(trans) {
    let width = '80vh';
    const mobileQuery = this.media.matchMedia('(min-width: 768px)');
    mobileQuery.onchange = (res) => {
      if(res.matches) {
        width = '50vh';
      }
    }
    const dialogConfig = new MatDialogConfig();
    dialogConfig.position = { top: '10' };
    dialogConfig.hasBackdrop = true;
    dialogConfig.width = width;
    dialogConfig.data = trans;
    const modalRef = this.dialog.open(ViewTransactionComponent, dialogConfig);

    modalRef.afterClosed().subscribe(result => {});
  }

}
