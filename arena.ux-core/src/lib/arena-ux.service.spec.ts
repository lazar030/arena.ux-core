import { TestBed } from '@angular/core/testing';

import { ArenaUXService } from './arena-ux.service';

describe('ArenaUXService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArenaUXService = TestBed.get(ArenaUXService);
    expect(service).toBeTruthy();
  });
});
