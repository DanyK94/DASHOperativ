import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { AssetService } from './asset';
import { provideHttpClient } from '@angular/common/http';

describe('AssetService', () => {
  let service: AssetService;
  let httpMock: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(AssetService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('filteredAssets return only active assets when ACTIVE filter is set', () => {
    service.setStatusFilter('ACTIVE');

    expect(service.filteredAssets().every(a => a.status === 'ACTIVE')).toBe(true);
  });
});
