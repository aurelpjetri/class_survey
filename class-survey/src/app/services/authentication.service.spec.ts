import { TestBed, inject } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Router } from '@angular/router';

describe('AuthenticationService', () => {
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticationService,
        HttpClient, HttpHandler,
        { provide: Router, useValue: routerSpy } ],
      schemas: [ NO_ERRORS_SCHEMA ]
    });
  });

  it('should be created', inject([AuthenticationService], (service: AuthenticationService) => {
    expect(service).toBeTruthy();
  }));
});
