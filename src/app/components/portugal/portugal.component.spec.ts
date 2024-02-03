import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortugalComponent } from './portugal.component';

describe('PortugalComponent', () => {
  let component: PortugalComponent;
  let fixture: ComponentFixture<PortugalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortugalComponent]
    });
    fixture = TestBed.createComponent(PortugalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
