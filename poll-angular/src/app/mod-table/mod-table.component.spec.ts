import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModTableComponent } from './mod-table.component';

describe('ModTableComponent', () => {
  let component: ModTableComponent;
  let fixture: ComponentFixture<ModTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
