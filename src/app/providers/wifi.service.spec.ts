import { TestBed, inject } from '@angular/core/testing';

import { WifiService } from './wifi.service';

describe('WifiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WifiService]
    });
  });

  it('should be created', inject([WifiService], (service: WifiService) => {
    expect(service).toBeTruthy();
  }));
});
