import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  hide: boolean = true;
  constructor(private formBuilder: FormBuilder, private loginService: LoginService,
    private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() { return this.loginForm.controls};

  login() {
    if (this.loginForm.invalid) {
      return;
    }

    this.loginService.login(this.f.user.value, this.f.password.value).subscribe(result => {
      if (Object.keys(result).length > 0) {
        localStorage.setItem('currentUser', JSON.stringify(result));
        this.router.navigate(['/admin']);
      }
    });
    console.log(this.loginForm.value);
  }


}
