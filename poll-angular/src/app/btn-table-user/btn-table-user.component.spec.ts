import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnTableUserComponent } from './btn-table-user.component';

describe('BtnTableUserComponent', () => {
  let component: BtnTableUserComponent;
  let fixture: ComponentFixture<BtnTableUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BtnTableUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BtnTableUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
