import { TestBed } from '@angular/core/testing';

import { FirebaseProviderService } from './firebase-provider.service';

describe('FirebaseProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirebaseProviderService = TestBed.get(FirebaseProviderService);
    expect(service).toBeTruthy();
  });
});
