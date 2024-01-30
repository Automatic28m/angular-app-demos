import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassParamComponent } from './pass-param.component';

describe('PassParamComponent', () => {
  let component: PassParamComponent;
  let fixture: ComponentFixture<PassParamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PassParamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PassParamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
