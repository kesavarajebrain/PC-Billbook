import { TestBed } from '@angular/core/testing';

import { TransSheetService } from './trans-sheet.service';

describe('TransSheetService', () => {
  let service: TransSheetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransSheetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
