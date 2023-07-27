import { TestBed } from '@angular/core/testing';

import { AngModalEtatService } from './ang-modal-etat.service';

describe('AngModalEtatService', () => {
  let service: AngModalEtatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngModalEtatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
