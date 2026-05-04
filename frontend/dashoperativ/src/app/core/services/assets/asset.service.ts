import { Injectable, resource, inject, computed } from '@angular/core';
import { Asset } from '../../models/asset.model';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AssetService {

  protected http = inject(HttpClient);
  protected apiUrl = '/api/assets';

  readonly assetResources = resource({
    loader: () => firstValueFrom( this.http.get<Asset[]>(this.apiUrl) )
  });

  readonly assets = computed(() => this.assetResources.value() ?? []);
  readonly isLoading = computed(() => this.assetResources.isLoading());
  readonly hasError = computed(() => this.assetResources.error());
  

}
