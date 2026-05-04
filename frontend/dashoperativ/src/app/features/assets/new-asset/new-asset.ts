import { Component, OnInit } from '@angular/core';
import {ReactiveFormsModule, FormBuilder, FormGroup} from '@angular/forms';



@Component({
  selector: 'app-new-asset',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new-asset.html',
  styleUrl: './new-asset.scss',
})
export class NewAsset implements OnInit{
  addAcForm!: FormGroup;
  
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.addAcForm = this.fb.group({
      id: [],
      registration_code: [],
      model: [],
      manufacturer: [],
      max_cargo_load: [],
      max_pax_load: [],
      fuel_capacity: []
    })
  }
}
