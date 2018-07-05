import { TestBed, inject } from '@angular/core/testing';

import { QuesionnaireDataService } from './quesionnaire-data.service';

describe('QuesionnaireDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuesionnaireDataService]
    });
  });

  it('should be created', inject([QuesionnaireDataService], (service: QuesionnaireDataService) => {
    expect(service).toBeTruthy();
  }));
});
