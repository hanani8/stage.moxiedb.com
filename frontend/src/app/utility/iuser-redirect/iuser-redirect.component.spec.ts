import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IuserRedirectComponent } from './iuser-redirect.component';

describe('IuserRedirectComponent', () => {
  let component: IuserRedirectComponent;
  let fixture: ComponentFixture<IuserRedirectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IuserRedirectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IuserRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
