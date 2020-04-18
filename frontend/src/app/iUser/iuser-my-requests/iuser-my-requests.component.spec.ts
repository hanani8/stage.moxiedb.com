import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IuserMyRequestsComponent } from './iuser-my-requests.component';

describe('IuserMyRequestsComponent', () => {
  let component: IuserMyRequestsComponent;
  let fixture: ComponentFixture<IuserMyRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IuserMyRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IuserMyRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
