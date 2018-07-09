import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentComponent } from './student.component';

import { Observable, of } from 'rxjs';

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Router } from '@angular/router';

import {UserDataService} from '../services/user-data.service';
import {UserDataMockStud} from '../services/mock/user-data.service.mock';

describe('StudentComponent', () => {
  let component: StudentComponent;
  let fixture: ComponentFixture<StudentComponent>;

  beforeEach(() => {
    var questionnaire = 404;

    const questionnaireDataService = jasmine.createSpyObj('questionnaireDataService', ['retrieveData']);
    var retrieveDataSpy = questionnaireDataService.retrieveData.and.returnValue( of(questionnaire) );

    const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
    TestBed.configureTestingModule({
      declarations: [ StudentComponent ],
      providers: [ HttpClient, HttpHandler,
        { provide: Router, useValue: routerSpy },
        { provide: UserDataService, useClass: UserDataMockStud }
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

  it('should print "no questionnaires to be completed" ', () => {
    console.log(fixture.nativeElement.innerHTML)
    expect(fixture.nativeElement.innerHTML).toContain('no questionnaires');
  });

});
