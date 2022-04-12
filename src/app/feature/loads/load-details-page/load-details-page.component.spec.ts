import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadDetailsPageComponent } from './load-details-page.component';

describe('LoadDetailsPageComponent', () => {
  let component: LoadDetailsPageComponent;
  let fixture: ComponentFixture<LoadDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadDetailsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
