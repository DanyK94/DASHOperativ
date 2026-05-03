import { Component, inject } from '@angular/core';
import { AssetService } from '../../../core/services/asset';
import { AssetStatusPipe } from '../../../core/pipes/asset-status.pipe';
import { RouterLink, RouterModule } from "@angular/router";


@Component({
  selector: 'app-assets-list',
  standalone: true,
  imports: [AssetStatusPipe, RouterLink, RouterModule],
  templateUrl: './assets-list.html',
  styleUrl: './assets-list.scss',
})
export class AssetsList {
  protected assetService = inject(AssetService);

  simulateToggle(id: string) {
    const current = this.assetService.assets().find(a => a.id === id);
    if (!current) return;
    const next = current.status === 'ACTIVE' ? 'OFFLINE' : 'ACTIVE';
    this.assetService.updateStatus(id, next);
  }

  setMaintenance(id: string) {
    this.assetService.setMaintenance(id);
  }
}
