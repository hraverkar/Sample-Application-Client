import { TestBed } from '@angular/core/testing';

import { VisiterService } from './visiter.service';

describe('VisiterService', () => {
  let service: VisiterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisiterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
