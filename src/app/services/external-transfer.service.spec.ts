import { TestBed } from '@angular/core/testing';

import { ExternalTransferService } from './external-transfer.service';

describe('ExternalTransferService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExternalTransferService = TestBed.get(ExternalTransferService);
    expect(service).toBeTruthy();
  });
});
