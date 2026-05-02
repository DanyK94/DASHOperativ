import { Component, inject } from '@angular/core';
import { AssetService } from '../../../core/services/asset';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-assets-list',
  standalone: true,
  template: `
    <h2>Asset Operativi</h2>
    @for (asset of assetService.assets(); track asset.id) {
      <div>
        <strong> {{asset.name}}</strong>
        - {{asset.type}}
        - {{asset.status}}
        - {{asset.location.zone}}
        <button (click)="simulateToggle(asset.id)">Toggle Status</button>
      </div>
    } @empty {
      <p>Nessun asset disponibile</p>
    }
  `,

  //templateUrl: './assets-list.html',
  //styleUrl: './assets-list.scss',
})
export class AssetsList {
  protected assetService = inject(AssetService);

  simulateToggle(id: string) {
    const current = this.assetService.assets().find(a => a.id === id);
    if (!current) return;
    const next = current.status === 'ACTIVE' ? 'OFFLINE' : 'ACTIVE';
    this.assetService.updateStatus(id, next);
  }
}
