import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XuserNavigationComponent } from './xuser-navigation.component';

describe('XuserNavigationComponent', () => {
  let component: XuserNavigationComponent;
  let fixture: ComponentFixture<XuserNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XuserNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XuserNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
