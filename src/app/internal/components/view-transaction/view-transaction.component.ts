import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA,  } from '@angular/material/dialog';
import { PaymentType } from 'src/app/shared/constants/payment-type';
import { Transaction } from 'src/app/shared/models/transaction.model';
import { TransactionsService } from 'src/app/shared/services/transactions.service';

@Component({
  selector: 'app-view-transaction',
  templateUrl: './view-transaction.component.html',
  styleUrls: ['./view-transaction.component.scss']
})
export class ViewTransactionComponent implements OnInit {
  transaction: Transaction;
  constructor(private transactionService: TransactionsService, @Inject(MAT_DIALOG_DATA) public data: any,
  public paymentType: PaymentType) { }

  ngOnInit(): void {
    console.log(this.paymentType)
    this.transactionService.show(this.data.id, {with: 'revExp'} ).subscribe(res => {
      this.transaction = res.data;
    })
  }

}
