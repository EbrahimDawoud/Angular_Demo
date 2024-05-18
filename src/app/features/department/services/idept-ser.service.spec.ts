import { TestBed } from '@angular/core/testing';

import { IDeptSerService } from './idept-ser.service';

describe('IDeptSerService', () => {
  let service: IDeptSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IDeptSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
