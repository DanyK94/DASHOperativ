import { Component, inject } from '@angular/core';
import { AssetService } from '../../core/services/asset';
import { AssetType } from '../../core/models/asset.model';

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


