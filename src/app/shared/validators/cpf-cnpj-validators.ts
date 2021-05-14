import { AbstractControl, ValidationErrors } from "@angular/forms";

export class CpfCnpjValidator {
  private sum: number;
  private rest: number;

  validateCPF(cpf: string): ValidationErrors | null {
    let sum = 0;
    let rest = 0;

    const blacklist = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ];

    cpf = cpf.replace(/([^\da-zA-Z])/g, '') || String(cpf);
    if (cpf.length < 11) {
        cpf = cpf.padStart(11, '0');
    }

    if (cpf.length < 11 || blacklist.indexOf(cpf) >= 0) {
        return {cpf: true};
    }

    for (let i = 0; i < 9; i++) {
        sum += Number(cpf[i]) * (10 - i);
    }
    rest = (sum * 10) % 11;
    rest = Number(rest >= 10 && '0' || rest);
    if (rest !== Number(cpf.substring(9, 10))) {
        return {cpf: true};
    }

    sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += Number(cpf[i]) * (11 - i);
    }
    rest = (sum * 10) % 11;
    rest = Number(rest >= 10 && '0' || rest);
    if (rest !== Number(cpf.substring(10, 11))) {
        return {cpf: true};
    }
    return null;
  }

  validateCNPJ(cnpj): ValidationErrors | null {

    cnpj = cnpj.replace(/[^\d]+/g,'');

    if(cnpj == '') return {cnpj: true};

    if (cnpj.length != 14) return {cnpj: true};;

    // Elimina CNPJs invalidos conhecidos
    if (cnpj == "00000000000000" ||
        cnpj == "11111111111111" ||
        cnpj == "22222222222222" ||
        cnpj == "33333333333333" ||
        cnpj == "44444444444444" ||
        cnpj == "55555555555555" ||
        cnpj == "66666666666666" ||
        cnpj == "77777777777777" ||
        cnpj == "88888888888888" ||
        cnpj == "99999999999999") {
        return {cnpj: true};;
    }

    // Valida DVs
    let tamanho = cnpj.length - 2
    let numeros = cnpj.substring(0,tamanho);
    let digitos = cnpj.substring(tamanho);
    let soma = 0;
    let pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
            pos = 9;
    }
    let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0)){
      return {cnpj: true};
    }

    tamanho = tamanho + 1;
    numeros = cnpj.substring(0,tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(1)){
      return {cnpj: true};
    }

    return null;

}

}
