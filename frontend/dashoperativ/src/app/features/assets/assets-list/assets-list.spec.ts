import { ComponentFixture, TestBed} from '@angular/core/testing';
import { signal } from '@angular/core';
import { AssetsList } from './assets-list';
import { AssetService } from '@core/services/asset';

class MockAssetService {
  isLoading = signal(false);
}

describe('AssetsList', () => {
  let component: AssetsList;
  let assetService: MockAssetService;
  let fixture: ComponentFixture<AssetsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssetsList],
      providers: [
        { provide: AssetService, useClass: MockAssetService }
      ]
    }).compileComponents();

    assetService = TestBed.inject(AssetService) as any;

    fixture = TestBed.createComponent(AssetsList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Mostra messaggio caricamento quando isLoading è true', () => {
    assetService.isLoading.set(true);
    fixture.detectChanges();

    const html = fixture.nativeElement as HTMLElement;
    expect(html.textContent).toContain('Caricamento in corso...');
  });
});
