import { TestBed } from '@angular/core/testing';

import { BusService } from './bus.service';

describe('BusServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BusService = TestBed.get(BusService);
    expect(service).toBeTruthy();
  });
});
