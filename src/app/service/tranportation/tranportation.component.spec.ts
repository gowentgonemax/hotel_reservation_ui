import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranportationComponent } from './tranportation.component';

describe('TranportationComponent', () => {
  let component: TranportationComponent;
  let fixture: ComponentFixture<TranportationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranportationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TranportationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
