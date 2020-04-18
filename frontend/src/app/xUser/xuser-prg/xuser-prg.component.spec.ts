import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XuserPrgComponent } from './xuser-prg.component';

describe('XuserPrgComponent', () => {
  let component: XuserPrgComponent;
  let fixture: ComponentFixture<XuserPrgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XuserPrgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XuserPrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
