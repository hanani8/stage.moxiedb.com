import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IuserNavigationComponent } from './iuser-navigation.component';

describe('IuserNavigationComponent', () => {
  let component: IuserNavigationComponent;
  let fixture: ComponentFixture<IuserNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IuserNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IuserNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
