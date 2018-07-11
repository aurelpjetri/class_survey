import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompileQuestionnaireComponent } from './compile-questionnaire.component';

describe('CompileQuestionnaireComponent', () => {
  let component: CompileQuestionnaireComponent;
  let fixture: ComponentFixture<CompileQuestionnaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompileQuestionnaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompileQuestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
