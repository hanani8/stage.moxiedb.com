import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PRGComponent } from './prg.component';

describe('PRGComponent', () => {
  let component: PRGComponent;
  let fixture: ComponentFixture<PRGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PRGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PRGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
