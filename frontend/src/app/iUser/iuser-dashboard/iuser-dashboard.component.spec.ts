import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IuserDashboardComponent } from './iuser-dashboard.component';

describe('IuserDashboardComponent', () => {
  let component: IuserDashboardComponent;
  let fixture: ComponentFixture<IuserDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IuserDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IuserDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
