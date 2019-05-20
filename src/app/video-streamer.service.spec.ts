import { TestBed } from '@angular/core/testing';

import { VideoStreamerService } from './video-streamer.service';

describe('VideoStreamerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VideoStreamerService = TestBed.get(VideoStreamerService);
    expect(service).toBeTruthy();
  });
});
