import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pestania1Component } from './pestania1.component';

describe('Pestania1Component', () => {
  let component: Pestania1Component;
  let fixture: ComponentFixture<Pestania1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pestania1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pestania1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
