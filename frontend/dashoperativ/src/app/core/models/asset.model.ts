export interface Asset {
    id: string;
    id_asset: string;
    type: string;
    status: string;
    zone: string;
    assignedTo: string;
    lastUpdate: Date;
}

export type CreateAssetDto = Omit<Asset, 'id' | 'lastUpdate'>;
export type UpdateAssetDto = Partial<CreateAssetDto>;
