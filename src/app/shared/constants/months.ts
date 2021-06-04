import { Injectable } from "@angular/core";
@Injectable({
  providedIn: 'root'
})
export class Months {
  public MONTHS_NAMES: Array<string> = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ]
  public MONTHS: Array<Object> = [
    {
      name: 'Janeiro',
      shortName: 'Jan',
      value: 1
    },{
      name: 'Fevereiro',
      shortName: 'Fev',
      value: 2
    },{
      name: 'Março',
      shortName: 'Mar',
      value: 3
    },{
      name: 'Abril',
      shortName: 'Abr',
      value: 4
    },{
      name: 'Maio',
      shortName: 'Mai',
      value: 5
    },{
      name: 'Junho',
      shortName: 'Jun',
      value: 6
    },{
      name: 'Julho',
      shortName: 'Jul',
      value: 7
    },{
      name: 'Agosto',
      shortName: 'Ago',
      value: 8
    },{
      name: 'Setembro',
      shortName: 'Set',
      value: 9
    },{
      name: 'Outubro',
      shortName: 'Out',
      value: 10
    },{
      name: 'Novembro',
      shortName: 'Nov',
      value: 11
    },{
      name: 'Dezembro',
      shortName: 'Dez',
      value: 12
    },
  ];
}
