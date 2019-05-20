import { TestBed } from '@angular/core/testing';

import { UserMediaService } from './user-media.service';

describe('UserMediaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserMediaService = TestBed.get(UserMediaService);
    expect(service).toBeTruthy();
  });
});
