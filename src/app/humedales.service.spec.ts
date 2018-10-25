import { TestBed } from '@angular/core/testing';

import { HumedalesService } from './humedales.service';

describe('HumedalesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HumedalesService = TestBed.get(HumedalesService);
    expect(service).toBeTruthy();
  });
});
