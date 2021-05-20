import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevExpComponent } from './rev-exp.component';

describe('RevExpComponent', () => {
  let component: RevExpComponent;
  let fixture: ComponentFixture<RevExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevExpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
