import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Transaction } from '../models/transaction.model';
import { Pagination } from '../models/pagination.model';
import { tap } from 'rxjs/operators';


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

  constructor(private http: HttpClient) {
    this.loadTransactions();
  }

  public getCategories(): Observable<any> {
    const revexp = this.http.get(`${environment.urlBase}revexp`);
    return revexp;
  }

  public addTransaction(transaction: Transaction) {
    const trans = this.http.post(`${environment.urlBase}transactions`, transaction)
      .pipe(
        tap(() => {
          this.transactionsSubject.next();
        })
      )
    return trans;
  }

  public loadTransactions() {
    const transactions = this.http.get(`${environment.urlBase}transactions`);
    return transactions
  }

  get refreshTransaction() {
    return this.transactionsSubject;
  }



}
