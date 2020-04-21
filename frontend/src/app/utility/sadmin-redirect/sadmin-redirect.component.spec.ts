import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SadminRedirectComponent } from './sadmin-redirect.component';

describe('SadminRedirectComponent', () => {
  let component: SadminRedirectComponent;
  let fixture: ComponentFixture<SadminRedirectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SadminRedirectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SadminRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
