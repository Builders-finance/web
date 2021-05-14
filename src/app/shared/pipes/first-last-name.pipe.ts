import { Pipe, PipeTransform } from '@angular/core';

/**
 * Pipe que retorna a partir de uma string a primeira e a última palavra.
 * Ex.: José Maria de Amaral Pereira Gois
 * Retorna: JOSÉ GOIS
 * Como usar: {{user.name | firstLastName}}
 */
@Pipe({
  name: 'firstLastName'
})
export class FirstLastNamePipe implements PipeTransform {

  transform(value: string): string {
    const arrayNames = value.toUpperCase().split(' ');
    const first = arrayNames[0];
    const last = arrayNames.pop();
    return `${first} ${last}`;
  }

}
