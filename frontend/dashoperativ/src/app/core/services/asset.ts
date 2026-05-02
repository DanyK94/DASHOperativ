import { Injectable, signal, computed, inject, resource } from '@angular/core';
import { Asset, AssetStatus } from '../models/asset.model';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';


@Injectable({providedIn: 'root',})
export class AssetService {

  private readonly http = inject(HttpClient);
  private readonly apiUrl = '/api/assets';

  readonly assetsResources = resource({
    loader: () => firstValueFrom( this.http.get<Asset[]>(this.apiUrl) )
  });


  readonly assets = computed(() => this.assetsResources.value() ?? []);
  readonly isLoading = computed(() => this.assetsResources.isLoading());
  readonly hasError = computed(() => this.assetsResources.error());

  readonly activeCount = computed(() => this.assets().filter(a => a.status === 'ACTIVE').length);

  updateStatus(id: string, status: AssetStatus) : void {
    const asset = this.assets().find(a => a.id === id);
    if (!asset) return;

    this.http.patch<Asset>(`${this.apiUrl}/${id}`, {status}).subscribe({
      next: () => {
        this.assetsResources.reload();
      },
      error: (err) => {
        console.error('Errore aggiornamento status:',err);
      }
    })
  }
}
