import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewExpenseComponent } from './new-expense.component';

describe('NewExpenseComponent', () => {
  let component: NewExpenseComponent;
  let fixture: ComponentFixture<NewExpenseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewExpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
