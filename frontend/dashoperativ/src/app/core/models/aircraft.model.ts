export interface Aircraft {
    id: string;
    registration_code: string;
    model: string;
    manufacturer: string;
    max_cargo_load: number;
    max_pax_load: number;
    fuel_capacity: number;
}


export type CreateAircraftDto = Omit<Aircraft, 'id'>; //Omettere id alla creazioneupdateAircraft
export type UpdateAircraftDto = Partial<CreateAircraftDto>; //CreateAircraftDto ma coin tutte le proprietà opzionali
