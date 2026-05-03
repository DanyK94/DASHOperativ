import { Pipe , PipeTransform } from "@angular/core";
import { AssetStatus } from "@core/models/asset.model";

@Pipe({ name:'assetStatus', standalone: true })

export class AssetStatusPipe implements PipeTransform {
    transform(status: AssetStatus): string {
        const map: Record<AssetStatus, string> = {
            'ACTIVE': '🟢 Attivo',
            'OFFLINE': '🔴 Offline',
            'MAINTENANCE': '🟡 Manutenzione'
        };
        return map[status];
    }
}