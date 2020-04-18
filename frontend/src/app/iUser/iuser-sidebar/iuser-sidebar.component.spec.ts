import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IuserSidebarComponent } from './iuser-sidebar.component';

describe('IuserSidebarComponent', () => {
  let component: IuserSidebarComponent;
  let fixture: ComponentFixture<IuserSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IuserSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IuserSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
