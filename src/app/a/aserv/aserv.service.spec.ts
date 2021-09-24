import { TestBed } from '@angular/core/testing';

import { AservService } from './aserv.service';

describe('AservService', () => {
  let service: AservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
