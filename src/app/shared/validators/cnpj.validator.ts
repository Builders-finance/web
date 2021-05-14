import {AbstractControl, ValidationErrors} from '@angular/forms';
import { CpfCnpjValidator } from './cpf-cnpj-validators';

export function cnpjValidator(control: AbstractControl): ValidationErrors | null {
  let cnpj = typeof control.value === 'string' && control.value.replace(/([^\da-zA-Z])/g, '') || String(control.value);
  let cpfCnpjValidator = new CpfCnpjValidator();
  return cpfCnpjValidator.validateCNPJ(cnpj);
}

