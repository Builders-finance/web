import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutoCompleteService {

  constructor() { }

  public filterAutoComplete(value: any, arraySearch:any, objSelected:any): any[] {

    if (value && typeof objSelected !== 'object') {
      const filterValue = value.toLowerCase();

      return arraySearch.filter(obj => {
        if(typeof obj !== 'object'){
          return obj.toLowerCase().indexOf(filterValue) === 0
        }
        return obj.name.toLowerCase().indexOf(filterValue) === 0
      });
    }
    return arraySearch;
  }

  public displayFn(obj: any) {
    if (obj) {
      if(typeof obj !== 'object') return obj;
      return obj.name;
    }
  }
}
