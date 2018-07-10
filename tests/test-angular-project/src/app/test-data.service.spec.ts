import { TestBed, inject } from '@angular/core/testing';

import { TestDataService } from './test-data.service';

describe('TestDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestDataService]
    });
  });

  it('should be created', inject([TestDataService], (service: TestDataService) => {
    expect(service).toBeTruthy();
  }));
});
