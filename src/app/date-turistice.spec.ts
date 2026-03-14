import { TestBed } from '@angular/core/testing';

import { DateTuristice } from './date-turistice';

describe('DateTuristice', () => {
  let service: DateTuristice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateTuristice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
