import { Component, inject } from '@angular/core';
import { AssetService } from '../../core/services/asset_v1';
import { AssetType } from '../../core/models/asset_v1.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {

  protected assetService = inject(AssetService);

  getCountActiveAssets(type: AssetType) : number {
    return this.assetService.countActive(type);
  }
}


