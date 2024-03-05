import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularButtonComponent } from './angular-button.component';

describe('AngularButtonComponent', () => {
  let component: AngularButtonComponent;
  let fixture: ComponentFixture<AngularButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngularButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
