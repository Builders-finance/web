import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ModalNewExpenseComponent } from './modal-new-expense.component';

describe('ModalNewExpenseComponent', () => {
  let component: ModalNewExpenseComponent;
  let fixture: ComponentFixture<ModalNewExpenseComponent>;

  beforeEach(waitForAsync(() => {
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
