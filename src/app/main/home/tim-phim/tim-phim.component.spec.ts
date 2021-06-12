import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimPhimComponent } from './tim-phim.component';

describe('TimPhimComponent', () => {
  let component: TimPhimComponent;
  let fixture: ComponentFixture<TimPhimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimPhimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimPhimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
