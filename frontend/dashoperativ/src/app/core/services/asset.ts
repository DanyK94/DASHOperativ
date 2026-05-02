import { Injectable, signal, computed, inject, resource } from '@angular/core';
import { Asset, AssetStatus, AssetType } from '../models/asset.model';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';


@Injectable({providedIn: 'root',})
export class AssetService {

  private readonly http = inject(HttpClient);
  private readonly apiUrl = '/api/assets';

  readonly statusFilter = signal<AssetStatus | 'ALL'>('ALL');

  

  readonly assetsResources = resource({
    loader: () => firstValueFrom( this.http.get<Asset[]>(this.apiUrl) )
  });


  readonly assets = computed(() => this.assetsResources.value() ?? []);
  readonly isLoading = computed(() => this.assetsResources.isLoading());
  readonly hasError = computed(() => this.assetsResources.error());

  readonly activeCount = computed(() => this.assets().filter(a => a.status === 'ACTIVE').length);

  readonly filteredAssets = computed(() => {
    const filter = this.statusFilter();
    const all = this.assets();
    if (filter === 'ALL') return this.assets();
    return all.filter(a => a.status === filter);  
  })
  

  updateStatus(id: string, status: AssetStatus) : void {
    const asset = this.assets().find(a => a.id === id);
    const updateData = {
      status,
      lastUpdate: new Date()
    };

    if (!asset) return;

    this.http.patch<Asset>(`${this.apiUrl}/${id}`, updateData).subscribe({
      next: () => {
        this.assetsResources.reload();
      },
      error: (err) => {
        console.error('Errore aggiornamento status:',err);
      }
    })
  }

  setMaintenance(id: string) : void {
    const asset = this.assets().find(a => a.id === id);
    const now = new Date();
    const updateData = {
      status: 'MAINTENANCE',
      lastUpdate: now
    };

    if (!asset) return;

    this.http.patch<Asset>(`${this.apiUrl}/${id}`, updateData).subscribe({
      next: () => {
        this.assetsResources.reload();
      },
      error: (err) => {
        console.error('Errore aggiornamento status:',err);
      }
    })
  }

  setStatusFilter(status: AssetStatus | 'ALL') {
    console.log('Filtering: ', status);
    this.statusFilter.set(status);
  }

  countActive(type : AssetType) : number {
    return this.assets().filter(a => a.type === type && a.status === 'ACTIVE').length;
  }
}
