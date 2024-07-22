import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgdeComponent } from './pgde.component';

describe('PgdeComponent', () => {
  let component: PgdeComponent;
  let fixture: ComponentFixture<PgdeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PgdeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PgdeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
