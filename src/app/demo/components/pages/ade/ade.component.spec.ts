import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdeComponent } from './ade.component';

describe('AdeComponent', () => {
  let component: AdeComponent;
  let fixture: ComponentFixture<AdeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
