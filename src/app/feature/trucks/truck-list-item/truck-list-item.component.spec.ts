import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckListItemComponent } from './truck-list-item.component';

describe('TruckListItemComponent', () => {
  let component: TruckListItemComponent;
  let fixture: ComponentFixture<TruckListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TruckListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TruckListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
