export type AssetStatus = 'ACTIVE' | 'MAINTENANCE' | 'OFFLINE';
export type AssetType = 'VEHICLE' | 'AIRCRAFT' | 'NAVAL' | 'EQUIPMENT';

export interface Asset {
    id: string;
    name: string;
    type: AssetType;
    status: AssetStatus;
    location: {
        lat: number;
        lng: number;
        zone: string;
    };
    lastUpdate: Date;
    assignedUnit?: string;
}
    


export type CreateAssetDto = Omit<Asset, 'id' | 'lastUpdate'>; //Omettere id e lastupdate alla creazione - gestito da sys
export type UpdateAssetDto = Partial<CreateAssetDto>; //CreateAssetDto ma coin tutte le proprietà opzionali