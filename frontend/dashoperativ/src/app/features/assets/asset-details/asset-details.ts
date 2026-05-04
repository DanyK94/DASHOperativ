import { Component, input, inject, computed } from '@angular/core';
import { AssetService } from '@core/services/asset_v1';


@Component({
  selector: 'app-asset-details',
  imports: [],
  templateUrl: './asset-details.html',
  styleUrl: './asset-details.scss',
})
export class AssetDetails {
  readonly id = input.required<string>(); // inietta parametro :id dall'url
  private assetService = inject(AssetService);

  readonly asset = computed(() => this.assetService.assets().find(a => a.id === this.id()));




}
