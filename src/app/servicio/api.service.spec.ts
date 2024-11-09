import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import { HttpHeaders, provideHttpClient } from '@angular/common/http';

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[provideHttpClient, HttpHeaders]
    });
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
