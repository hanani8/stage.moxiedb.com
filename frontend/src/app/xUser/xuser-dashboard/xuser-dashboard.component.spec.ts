import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XuserDashboardComponent } from './xuser-dashboard.component';

describe('XuserDashboardComponent', () => {
  let component: XuserDashboardComponent;
  let fixture: ComponentFixture<XuserDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XuserDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XuserDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
