import { Component, OnInit } from '@angular/core';
import { LayoutService } from './layout.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  opened: boolean = false;

  constructor(private layoutService: LayoutService) { }

  ngOnInit() {
    this.layoutService.changeMenu(false);
  }

  onOpenedChange() {
    this.layoutService.changeMenu(!this.opened);
  }



}
