import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNewExpenseComponent } from './modal-new-expense.component';

describe('ModalNewExpenseComponent', () => {
  let component: ModalNewExpenseComponent;
  let fixture: ComponentFixture<ModalNewExpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalNewExpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalNewExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
