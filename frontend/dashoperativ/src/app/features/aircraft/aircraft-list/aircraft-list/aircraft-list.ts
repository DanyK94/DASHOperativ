import { Component, inject, model, signal } from '@angular/core';
import { AircraftService } from '../../../../core/services/aircraft/aircraft.service';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Aircraft} from '@core/models/aircraft.model';


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
    const newAc = this.addAcForm.value as Aircraft;
    this.aircraftService.addAircraft(newAc);
    this.addAcForm.reset();
  }


  protected showAddRow = signal(false);
  protected selectedId = signal<string | null>(null);


  protected toggleAddRow(): void {
    this.showAddRow.update(v => !v);
    if (!this.showAddRow()) this.addAcForm.reset();
  }


  protected selectRow(id: string): void {
    this.selectedId.set(id);
  }

  protected deleteAircraft(): void {
    if (!this.selectedId()) return;
    console.log(this.selectedId())
    this.aircraftService.deleteAircraft(this.selectedId() || '');
    this.selectedId.set(null);
  }




}
