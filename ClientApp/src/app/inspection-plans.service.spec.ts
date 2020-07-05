import { TestBed } from '@angular/core/testing';

import { InspectionPlansService } from './inspection-plans.service';

describe('InspectionPlansService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InspectionPlansService = TestBed.get(InspectionPlansService);
    expect(service).toBeTruthy();
  });
});
