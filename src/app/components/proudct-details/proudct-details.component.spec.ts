import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProudctDetailsComponent } from './proudct-details.component';

describe('ProudctDetailsComponent', () => {
  let component: ProudctDetailsComponent;
  let fixture: ComponentFixture<ProudctDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProudctDetailsComponent]
    });
    fixture = TestBed.createComponent(ProudctDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
