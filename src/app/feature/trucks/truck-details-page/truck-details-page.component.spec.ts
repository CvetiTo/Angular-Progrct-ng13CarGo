import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckDetailsPageComponent } from './truck-details-page.component';

describe('TruckDetailsPageComponent', () => {
  let component: TruckDetailsPageComponent;
  let fixture: ComponentFixture<TruckDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TruckDetailsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TruckDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
