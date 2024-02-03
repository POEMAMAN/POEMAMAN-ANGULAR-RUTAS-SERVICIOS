import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EuropaComponent } from './europa.component';

describe('EuropaComponent', () => {
  let component: EuropaComponent;
  let fixture: ComponentFixture<EuropaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EuropaComponent]
    });
    fixture = TestBed.createComponent(EuropaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
