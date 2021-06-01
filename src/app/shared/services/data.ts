import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Transaction } from '../models/transaction.model';
import { Pagination } from '../models/pagination.model';
import { tap } from 'rxjs/operators';
import { HttpService } from './http.service';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  public expenses = new Subject<Array<any>>();

  private transactionsSubject = new Subject<any>();
  public snapshot = {categories:[], expenses:[], total:0}
  transactions: Transaction[];

  public categories = {
    health: {icon:"heart", name: "Beauty & Health", link:"beauty-and-health"},
    transportation: {icon:"bus", name: "Transportation", link:"transportation"},
    coffee: {icon:"coffee", name: "Coffee and Food", link:"coffee-and-food"},
    utilities: {icon:"money", name: "Utilities Payments", link:"utilities-payments"}
  }

  constructor(private http: HttpService) {
    this.loadTransactions();
  }

  public getCategories(): Observable<any> {
    const revexp = this.http.get(`revexp`);
    return revexp;
  }

  public addTransaction(transaction: Transaction) {
    const trans = this.http.post(`transactions`, transaction)
      .pipe(
        tap(() => {
          this.transactionsSubject.next();
        })
      )
    return trans;
  }

  public loadTransactions(filter?) {
    const transactions = this.http.get(`transactions`, filter);
    return transactions
  }

  public getTransactionsByRevExpId(id: string) {
    const transactions = this.http.get(`transactions/get-by-revexp/${id}`);
    return transactions;
  }

  get refreshTransaction() {
    return this.transactionsSubject;
  }



}
