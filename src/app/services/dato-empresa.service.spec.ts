import { TestBed } from '@angular/core/testing';

import { DatoEmpresaService } from './dato-empresa.service';

describe('DatoEmpresaService', () => {
  let service: DatoEmpresaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatoEmpresaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
