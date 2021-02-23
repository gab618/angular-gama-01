import { TestBed } from '@angular/core/testing';

import { DetalhesContatoService } from './detalhes-contato.service';

describe('DetalhesContatoService', () => {
  let service: DetalhesContatoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetalhesContatoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
