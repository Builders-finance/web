import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRevexpComponent } from './new-revexp.component';

describe('NewRevexpComponent', () => {
  let component: NewRevexpComponent;
  let fixture: ComponentFixture<NewRevexpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewRevexpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRevexpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
