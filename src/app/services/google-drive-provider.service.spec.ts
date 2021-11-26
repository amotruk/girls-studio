import { TestBed } from '@angular/core/testing';

import { GoogleDriveProviderService } from './google-drive-provider.service';

describe('GoogleDriveProviderService', () => {
  let service: GoogleDriveProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleDriveProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
