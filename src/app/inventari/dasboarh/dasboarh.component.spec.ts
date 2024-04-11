import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasboarhComponent } from './dasboarh.component';

describe('DasboarhComponent', () => {
  let component: DasboarhComponent;
  let fixture: ComponentFixture<DasboarhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DasboarhComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DasboarhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
