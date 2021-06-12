import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieBComponent } from './movie-b.component';

describe('MovieBComponent', () => {
  let component: MovieBComponent;
  let fixture: ComponentFixture<MovieBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
