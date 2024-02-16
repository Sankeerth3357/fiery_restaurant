import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewitemInfoComponent } from './view-order-info.component';

describe('ViewOrderInfoComponent', () => {
  let component: ViewitemInfoComponent;
  let fixture: ComponentFixture<ViewitemInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewitemInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewitemInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
