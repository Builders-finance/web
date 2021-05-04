import { Component, OnInit, Inject, OnDestroy, Input } from '@angular/core';
import { Transaction } from 'src/app/shared/models/transaction.model';
import { DataService } from 'src/app/shared/services/data';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit, OnDestroy {

  @Input() transactions: Transaction[];
  items =[]
  expensesSubscriber =  this.dataService.expenses;

  constructor(@Inject(DataService) private dataService: DataService) {
    console.log('trans', this.transactions)
         }

  ngOnInit() {
    console.log(this.transactions);
    // const summary = this.dataService.summary
    // console.log(summary)
    // this.items = summary
    // this.expensesSubscriber.subscribe(data=> {this.items=this.dataService.summary; console.log('subscribe',this.dataService.summary)})
  }


  // get summary () {

  //   const result = []
  //   const categories =[]

  //   this.snapshot.expenses.map(e=>{
  //     if(!categories.includes(e.category)) {
  //       // controll categories found
  //       categories.push(e.category)

  //       let category = this.getByCategory(e.category)

  //       const total = category.map(i=>i.total).reduce((a,b)=> a + b)

  //       result.push({
  //         category: this.categories[e.category],
  //         total,
  //         items:category
  //       })
  //     }
  //   })

  //   return result
  // }


  // getByCategory(category){
  //   this.loadTransactions()
  //   const dates = []
  //   const items = this.snapshot.expenses.filter(e=> e.category === category)
  //   const result = []

  //   items.map(i=> {
  //     if(!dates.includes(i.date)){
  //       dates.push(i.date)
  //       const itemsOnDate =  items.filter(d=>d.date === i.date)
  //       const totalOnDate = itemsOnDate.map(i=>i.value).reduce((a,b)=> a + b)
  //       result.push({ date: i.date, items:itemsOnDate, total: totalOnDate})
  //     }
  //   })

  //   return result
  // }

  ngOnDestroy(){
    if(this.expensesSubscriber){
     // this.expensesSubscriber.unsubscribe()
    }
  }

}
