import { TestBed, inject } from '@angular/core/testing';

import { UserDataService } from './user-data.service';

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';

describe('UserDataService', () => {
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserDataService,
        HttpClient, HttpHandler,
        { provide: Router, useValue: routerSpy } ],
      schemas: [ NO_ERRORS_SCHEMA ]
    });
  });

  it('should be created', inject([UserDataService], (service: UserDataService) => {
    expect(service).toBeTruthy();
  }));
});
