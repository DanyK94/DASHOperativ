import { Injectable, signal, computed } from '@angular/core';
import { Asset, AssetStatus } from '../models/asset.model';


@Injectable({providedIn: 'root',})
export class AssetService {
  private readonly _assets = signal<Asset[]>([
    {id: '1', name: 'Asset 1', type: 'VEHICLE', status: 'ACTIVE', location: {lat: 1 , lng: 1, zone: 'Zone 1'}, lastUpdate: new Date()},
    {id: '2', name: 'Asset 2', type: 'AIRCRAFT', status: 'MAINTENANCE', location: {lat: 2 , lng: 2, zone: 'Zone 2'}, lastUpdate: new Date()},
    {id: '3', name: 'Asset 3', type: 'NAVAL', status: 'OFFLINE', location: {lat: 3 , lng: 3, zone: 'Zone 3'}, lastUpdate: new Date()}
  ]);

  readonly assets = this._assets.asReadonly();

  readonly activeCount = computed(() => this._assets().filter(a => a.status === 'ACTIVE').length);

  addAsset(asset: Asset) {
    this._assets.update(list => [...list, asset])
  }
  updateStatus(id: string, status: AssetStatus) {
    this._assets.update(assets =>
     assets.map( a => a.id === id ? { ...a, status, lastUpdate: new Date ()} : a)
    );
  }

}
