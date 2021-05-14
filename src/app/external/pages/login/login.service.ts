import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/shared/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpService: HttpService, private router: Router) { }

  login(user: string, password: string){
    return this.httpService.post(`sessions`, {email: user, password: password});
  }

  public getCurrentUser() {
    const currentUser = localStorage.getItem('currentUser');
    return currentUser ? JSON.parse(currentUser) : null;
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/']);
  }
}
