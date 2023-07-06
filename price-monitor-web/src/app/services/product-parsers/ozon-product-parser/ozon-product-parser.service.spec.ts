import { TestBed } from '@angular/core/testing';

import { OzonProductParserService } from './ozon-product-parser.service';

describe('OzonProductParserService', () => {
  let service: OzonProductParserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OzonProductParserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
