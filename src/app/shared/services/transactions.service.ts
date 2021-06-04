import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private httpService: HttpService) { }

  show(transId: string, params?){
    return this.httpService.get(`transactions/${transId}`, params);
  }
}
