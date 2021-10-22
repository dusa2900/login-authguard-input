import { TestBed } from '@angular/core/testing';

import { TransService } from './trans.service';
import { HttpClientModule } from '@angular/common/http'

describe('TransService', () => {
  let service: TransService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service = TestBed.inject(TransService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
