import { TestBed, inject } from '@angular/core/testing';

import { QuestionnaireDataService } from './questionnaire-data.service';

describe('QuesionnaireDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionnaireDataService]
    });
  });

  it('should be created', inject([QuestionnaireDataService], (service: QuestionnaireDataService) => {
    expect(service).toBeTruthy();
  }));
});
