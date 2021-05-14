import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

/**
 * Validador utilizado para comparar dois campos.
 * Deve ser passado como validador do form e não por campo. (TODO verificar o por que está deprecated)
 * this.formBuilder.group({
      campo1: [''],
      campo2: ['']
    }, {validator: [compareTwoFieldsValidator('campo1', 'campo2')]});
 *
 * @param fieldOne
 * @param fieldTwo
 * @returns
 */
export function compareTwoFieldsValidator(fieldOne: string, fieldTwo: string): ValidatorFn {

  return (control: AbstractControl): ValidationErrors | null => {
    let error = null;
    if(control.value[fieldOne] && control.value[fieldTwo] && control.value[fieldOne] !== control.value[fieldTwo]) {
      error = { error: true } ;
      error[fieldOne] = { error: true, message: "Os campos não conferem." }
      error[fieldTwo] = { error: true, message: "Os campos não conferem." }
      control.get(fieldOne).setErrors(error);
      control.get(fieldTwo).setErrors(error);
    }else {
      control.get(fieldOne).setErrors(null)
      control.get(fieldTwo).setErrors(null);
    }
    return error;

  }

}
