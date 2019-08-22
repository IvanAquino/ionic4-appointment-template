import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickServicePage } from './pick-service.page';

describe('PickServicePage', () => {
  let component: PickServicePage;
  let fixture: ComponentFixture<PickServicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickServicePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickServicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
