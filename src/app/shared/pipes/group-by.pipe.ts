import { Pipe, PipeTransform } from '@angular/core';

/**
 * Pipe que recebe um ARRAY e retorna o mesmo agrupado por uma chave específica, podendo ou não retornar um totalizador
 * Como usar?
 * No template: *ngFor="let grp of array | groupBy: 'chaveAgrupadora':'chaveTotalizadora'"
 * chaveAgrupadora: Chave do array que deseja agrupar
 * chaveTotalizadora (opcional): Chave do array que deseja contabilizar (lembrando que será contabilizado dentro do agrupamento)
 * No component: let teste = this.pipeGroupBy.transform(this.arr, 'chaveAgrupadora', 'chaveTotalizadora');
 * Retorno:
 * [
    {
        "key": "chaveAgrupadora",
        "values": [
            {
                "xxx": 1
            },
            {
                "xxx": 2
            }
        ],
        "chaveTotalizadora": 10000
    }
]
 */
@Pipe({
  name: 'groupBy'
})
export class GroupByPipe implements PipeTransform {

  transform(value: Array<any>, field: string, fieldTotal?:string): unknown {
    const groupedObj = value.reduce((groups, item: any) => {
      const val = item[field];
      groups[val] = groups[val] || [];
      groups[val].push(item);
      return groups;
    }, {});
    if(fieldTotal){
      return Object.keys(groupedObj).map(key => {
        let countItems = groupedObj[key].reduce((acc, old) => {
              return {total: acc.total + old[fieldTotal]}
            }, {total: 0});
        return { key, values: groupedObj[key], total: countItems.total}
      })
    }
    return Object.keys(groupedObj).map(key => ({ key, values: groupedObj[key] }));
  }

}
