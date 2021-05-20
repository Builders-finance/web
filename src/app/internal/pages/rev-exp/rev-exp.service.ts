import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class RevExpService {

  constructor(private httpService: HttpService) { }

  list(params?){
    return this.httpService.get(`revexp`, params);
  }

  create(params) {
    return this.httpService.post(`revexp`, params);
  }
}
