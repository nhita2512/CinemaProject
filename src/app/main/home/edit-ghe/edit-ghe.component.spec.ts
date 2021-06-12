import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGheComponent } from './edit-ghe.component';

describe('EditGheComponent', () => {
  let component: EditGheComponent;
  let fixture: ComponentFixture<EditGheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditGheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
