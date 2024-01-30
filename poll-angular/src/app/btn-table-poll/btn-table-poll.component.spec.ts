import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnTablePollComponent } from './btn-table-poll.component';

describe('BtnTablePollComponent', () => {
  let component: BtnTablePollComponent;
  let fixture: ComponentFixture<BtnTablePollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BtnTablePollComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BtnTablePollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
