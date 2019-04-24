import { TestBed } from '@angular/core/testing';

import { ItemImportService } from './item-import.service';

describe('ItemImportService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemImportService = TestBed.get(ItemImportService);
    expect(service).toBeTruthy();
  });
});
