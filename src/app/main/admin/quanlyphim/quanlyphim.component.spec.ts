import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlyphimComponent } from './quanlyphim.component';

describe('QuanlyphimComponent', () => {
  let component: QuanlyphimComponent;
  let fixture: ComponentFixture<QuanlyphimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanlyphimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlyphimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
