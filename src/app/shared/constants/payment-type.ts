import { Injectable } from "@angular/core";
@Injectable({
  providedIn: 'root'
})
export class PaymentType {
  public PAYMENT_TYPE:any = {
    credit: 'Crédito',
    debit: 'Débito',
    cash: 'Dinheiro',
    pix: 'PIX',
    bill: 'Boleto'
  }
}
