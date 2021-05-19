import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  private menuOpened = new Subject<any>();
  constructor() { }

  changeMenu(opened) {
    this.menuOpened.next(opened);
  }

  get menuOpenedChange() {
    return this.menuOpened;
  }
}
