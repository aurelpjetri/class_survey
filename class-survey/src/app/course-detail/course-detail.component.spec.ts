import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDetailComponent } from './course-detail.component';

import { Observable, of } from 'rxjs';

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Router } from '@angular/router';

import {CourseDataService} from '../services/course-data.service';
import { CourseDataMock } from "../services/mock/course-data.service.mock";
import {QuestionnaireDataService} from '../services/questionnaire-data.service';
import { QuestionnaireDataMock } from "../services/mock/questionnaire-data.service.mock";

describe('CourseDetailComponent', () => {
  let component: CourseDetailComponent;
  let fixture: ComponentFixture<CourseDetailComponent>;

  beforeEach(() => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
    TestBed.configureTestingModule({
      declarations: [ CourseDetailComponent ],
      providers: [ HttpClient, HttpHandler,
        { provide: Router, useValue: routerSpy },
        { provide: CourseDataService, useClass: CourseDataMock },
        { provide: QuestionnaireDataService, useClass: QuestionnaireDataMock }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have an expired questionnaire', () => {
    expect(component.getExpired().length).toBe(1)
  });

});
