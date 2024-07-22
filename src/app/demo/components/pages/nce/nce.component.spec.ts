import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NCEComponent } from './nce.component';

describe('NCEComponent', () => {
  let component: NCEComponent;
  let fixture: ComponentFixture<NCEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NCEComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NCEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
