import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadListItemComponent } from './load-list-item.component';

describe('LoadListItemComponent', () => {
  let component: LoadListItemComponent;
  let fixture: ComponentFixture<LoadListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
