import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/shared/components/toast/toast.service';
import { compareTwoFieldsValidator } from 'src/app/shared/validators/compare-two-fields-validator';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  hide: boolean = true;
  constructor(private formBuilder: FormBuilder, private registerService: RegisterService,
    private router: Router, private toast: ToastService) { }

  ngOnInit(): void {
    this.formInit();
  }
  get f() { return this.registerForm.controls};

  formInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
      passwordConfirm: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    }, {validator: [compareTwoFieldsValidator('password', 'passwordConfirm')]});
  }

  register() {
    let params = {...this.registerForm.value};
    delete params.passwordConfirm;
    this.registerService.register(params).subscribe(res => {
      this.toast.showSuccess("Usuário cadastrado com sucesso.")
      this.router.navigate(['/login']);
    })

  }

}
