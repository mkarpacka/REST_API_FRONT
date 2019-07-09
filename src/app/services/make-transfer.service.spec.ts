import { TestBed } from '@angular/core/testing';

import { MakeTransferService } from './make-transfer.service';

describe('MakeTransferService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MakeTransferService = TestBed.get(MakeTransferService);
    expect(service).toBeTruthy();
  });
});
