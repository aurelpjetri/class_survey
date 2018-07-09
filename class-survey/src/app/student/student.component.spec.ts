import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentComponent } from './student.component';

import { Observable, of } from 'rxjs';

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Router } from '@angular/router';

import {UserDataService} from '../services/user-data.service';
import {UserDataMockStud} from '../services/mock/user-data.service.mock';

import {QuestionnaireDataService} from '../services/questionnaire-data.service';
import {QuestionnaireDataMock} from '../services/mock/questionnaire-data.service.mock';

describe('StudentComponent', () => {
  let component: StudentComponent;
  let fixture: ComponentFixture<StudentComponent>;

  beforeEach(() => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
    TestBed.configureTestingModule({
      declarations: [ StudentComponent ],
      providers: [ HttpClient, HttpHandler,
        { provide: Router, useValue: routerSpy },
        { provide: UserDataService, useClass: UserDataMockStud },
        { provide: QuestionnaireDataService, useClass: QuestionnaireDataMock }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should print "No questionnaires to be completed" ', () => {
    expect(fixture.nativeElement.innerHTML).toContain('No questionnaires');
  });

});
