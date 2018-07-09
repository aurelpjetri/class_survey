import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorComponent } from './professor.component';

import { Observable, of } from 'rxjs';

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Router } from '@angular/router';

import {CourseDataService} from '../services/course-data.service';
import {UserDataService} from '../services/user-data.service';
import {UserDataMockProf} from '../services/mock/user-data.service.mock';

describe('ProfessorComponent', () => {
  let component: ProfessorComponent;
  let fixture: ComponentFixture<ProfessorComponent>;

  beforeEach(() => {
    var course = {
			"code": "COUR000",
			"name": "Deep Networks",
			"cfu": 9,
			"year": "2017/18",
			"degree": "Master",
			"active": "true",
			"questionnaires": [
				"QUES000",
				"QUES003"
			]
		};

    const courseDataService = jasmine.createSpyObj('CourseDataService', ['retrieveData']);
    var retrieveDataSpy = courseDataService.retrieveData.and.returnValue( of(course) );

    const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
    TestBed.configureTestingModule({
      declarations: [ ProfessorComponent ],
      providers: [ HttpClient, HttpHandler,
        { provide: Router, useValue: routerSpy },
        { provide: UserDataService, useClass: UserDataMockProf }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have an active course', () => {
    expect(component.getActive().length).toBe(1)
  });

  it('should not have exipired courses', () => {
    expect(component.getExpired().length).toBe(0)
  });
});
