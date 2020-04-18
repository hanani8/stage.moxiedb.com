import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XuserRedirectComponent } from './xuser-redirect.component';

describe('XuserRedirectComponent', () => {
  let component: XuserRedirectComponent;
  let fixture: ComponentFixture<XuserRedirectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XuserRedirectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XuserRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
