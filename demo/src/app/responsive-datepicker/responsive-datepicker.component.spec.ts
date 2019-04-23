import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveDatepickerComponent } from './responsive-datepicker.component';

describe('ResponsiveDatepickerComponent', () => {
  let component: ResponsiveDatepickerComponent;
  let fixture: ComponentFixture<ResponsiveDatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsiveDatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsiveDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
