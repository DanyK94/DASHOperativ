import { Component, inject, model, signal } from '@angular/core';
import { AircraftService } from '../../../../core/services/aircraft/aircraft.service';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-aircraft-list',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './aircraft-list.html',
  styleUrl: './aircraft-list.scss',
})
export class AircraftList {
  protected aircraftService = inject(AircraftService);

  protected addAcForm = new FormGroup({
    registration_code: new FormControl('', Validators.required),
    model: new FormControl('', Validators.required),
    manufacturer: new FormControl('', Validators.required),
    max_cargo_load: new FormControl<number | null>(null),
    max_pax_load: new FormControl<number | null>(null),
    fuel_capacity: new FormControl<number | null>(null)
  });

  protected addAircraft(): void {
    if (this.addAcForm.invalid) return;
    this.aircraftService.addAircraft(this.addAcForm.value as any);
    this.addAcForm.reset();
  }


  protected showAddRow = signal(false);

  protected toggleAddRow(): void {
    this.showAddRow.update(v => !v);
    if (!this.showAddRow()) this.addAcForm.reset();
  }



}
