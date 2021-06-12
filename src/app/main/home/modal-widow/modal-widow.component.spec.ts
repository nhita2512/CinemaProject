import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalWidowComponent } from './modal-widow.component';

describe('ModalWidowComponent', () => {
  let component: ModalWidowComponent;
  let fixture: ComponentFixture<ModalWidowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalWidowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalWidowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
