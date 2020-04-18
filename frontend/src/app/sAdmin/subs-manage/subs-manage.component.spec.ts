import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsManageComponent } from './subs-manage.component';

describe('SubsManageComponent', () => {
  let component: SubsManageComponent;
  let fixture: ComponentFixture<SubsManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubsManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubsManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
