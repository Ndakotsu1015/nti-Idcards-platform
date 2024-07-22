import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PttpComponent } from './pttp.component';

describe('PttpComponent', () => {
  let component: PttpComponent;
  let fixture: ComponentFixture<PttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PttpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
