import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XuserSidebarComponent } from './xuser-sidebar.component';

describe('XuserSidebarComponent', () => {
  let component: XuserSidebarComponent;
  let fixture: ComponentFixture<XuserSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XuserSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XuserSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
