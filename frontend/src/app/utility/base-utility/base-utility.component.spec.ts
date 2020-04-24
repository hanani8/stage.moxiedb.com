import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseUtilityComponent } from './base-utility.component';

describe('BaseUtilityComponent', () => {
  let component: BaseUtilityComponent;
  let fixture: ComponentFixture<BaseUtilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseUtilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseUtilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
