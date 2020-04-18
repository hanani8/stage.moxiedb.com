import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenTicketComponent } from './gen-ticket.component';

describe('GenTicketComponent', () => {
  let component: GenTicketComponent;
  let fixture: ComponentFixture<GenTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
