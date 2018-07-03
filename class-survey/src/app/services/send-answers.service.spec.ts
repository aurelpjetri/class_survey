import { TestBed, inject } from '@angular/core/testing';

import { SendAnswerService } from './send-answer.service';

describe('SendAnswersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SendAnswerService]
    });
  });

  it('should be created', inject([SendAnswerService], (service: SendAnswerService) => {
    expect(service).toBeTruthy();
  }));
});
