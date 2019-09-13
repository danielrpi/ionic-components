import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonCheckboxPage } from './ion-checkbox.page';

describe('IonCheckboxPage', () => {
  let component: IonCheckboxPage;
  let fixture: ComponentFixture<IonCheckboxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonCheckboxPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IonCheckboxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
