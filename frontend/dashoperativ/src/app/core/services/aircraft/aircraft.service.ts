import { Injectable, computed, inject, resource } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Aircraft } from '../../models/aircraft.model';
import { firstValueFrom } from 'rxjs';

@Injectable({providedIn: 'root',})
export class AircraftService {

  private readonly apiUrl = 'api/aircrafts';
  private readonly http = inject(HttpClient);

  readonly aricraftResources = resource({
    loader: () => firstValueFrom( this.http.get<Aircraft[]>(this.apiUrl) )
  })

  readonly aircrafts = computed(() => this.aricraftResources.value() ?? []);
  readonly isLoading = computed(() => this.aricraftResources.isLoading());
  readonly hasError = computed(() => this.aricraftResources.error());


  addAircraft(aircraft: Aircraft) {
    this.http.post<Aircraft>(this.apiUrl, aircraft).subscribe({
      next: () => {
        this.aricraftResources.reload();
      },
      error: (err) => {
        console.error('Errore creazione aereo:',err);
      }
    })
  }
  
}
