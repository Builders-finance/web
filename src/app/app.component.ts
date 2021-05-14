import { Component, OnInit, AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'Builders Finance Control App';
  constructor() {}
  ngOnInit(): void {}

  ngAfterViewInit(): void {
    console.log('this.primarySampleComponent')
  }


}
