import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadsPageComponent } from './loads-page.component';

describe('LoadsPageComponent', () => {
  let component: LoadsPageComponent;
  let fixture: ComponentFixture<LoadsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
