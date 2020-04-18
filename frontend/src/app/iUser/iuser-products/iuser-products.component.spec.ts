import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IuserProductsComponent } from './iuser-products.component';

describe('IuserProductsComponent', () => {
  let component: IuserProductsComponent;
  let fixture: ComponentFixture<IuserProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IuserProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IuserProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
