import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XuserMyRequestsComponent } from './xuser-my-requests.component';

describe('XuserMyRequestsComponent', () => {
  let component: XuserMyRequestsComponent;
  let fixture: ComponentFixture<XuserMyRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XuserMyRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XuserMyRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
