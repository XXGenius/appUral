import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionairesPage } from './questionaires.page';

describe('QuestionairesPage', () => {
  let component: QuestionairesPage;
  let fixture: ComponentFixture<QuestionairesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionairesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionairesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
