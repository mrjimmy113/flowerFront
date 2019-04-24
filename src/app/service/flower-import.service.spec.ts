import { TestBed } from '@angular/core/testing';

import { FlowerImportService } from './flower-import.service';

describe('FlowerImportService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlowerImportService = TestBed.get(FlowerImportService);
    expect(service).toBeTruthy();
  });
});
