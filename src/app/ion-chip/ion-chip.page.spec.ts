import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonChipPage } from './ion-chip.page';

describe('IonChipPage', () => {
  let component: IonChipPage;
  let fixture: ComponentFixture<IonChipPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonChipPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IonChipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
