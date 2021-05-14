import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpService: HttpService) { }

  register(params){
    return this.httpService.post(`users`, params);
  }
}
