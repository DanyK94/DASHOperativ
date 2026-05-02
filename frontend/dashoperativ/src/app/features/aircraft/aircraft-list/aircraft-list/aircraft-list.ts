import { Component, inject } from '@angular/core';
import { AircraftService } from '../../../../core/services/aircraft/aircraft.service';


@Component({
  selector: 'app-aircraft-list',
  standalone: true,
  templateUrl: './aircraft-list.html',
  styleUrl: './aircraft-list.scss',
})
export class AircraftList {
  protected aircraftService = inject(AircraftService);


}
