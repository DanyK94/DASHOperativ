import { Component } from '@angular/core';
import { AssetService } from '../../../core/services/assets/asset.service';
import { AircraftService } from '../../../core/services/aircraft/aircraft.service';
import { inject, signal } from '@angular/core';
import { RouterLink, RouterModule } from "@angular/router";
import { NewAsset } from "../../assets/new-asset/new-asset";


@Component({
  selector: 'app-assets-list',
  standalone: true,
  imports: [RouterLink, RouterModule, NewAsset],
  templateUrl: './assets-list.html',
  styleUrl: './assets-list.scss',
})
export class AssetsList {
  protected assetService = inject(AssetService);
  protected aircraftService = inject(AircraftService);


  readonly activeId = signal<string | null>(null);



  setActiveRow(id: string) {
    if (this.activeId() === id) this.activeId.set(null);
    else this.activeId.set(id);
  }

  getAircraftById(id: string) {
    return this.aircraftService.getAircraftById(id);
  }


}


