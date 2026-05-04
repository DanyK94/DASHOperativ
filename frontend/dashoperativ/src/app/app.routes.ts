import { Routes } from '@angular/router';
import { authGuard } from '@core/auth/guard';


export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {
        path: 'dashboard',
        loadComponent: () => import('./features/dashboard/dashboard').then(m => m.Dashboard),
        title: 'Dashboard'
    },
    {
        path: 'assets',
        canActivate: [authGuard],
        loadComponent: () => import('./features/assets_v2/assets-list/assets-list').then(m => m.AssetsList),
        title: 'Asset Operativi'
    }, 
    {
        path: 'aircraft',
        loadComponent: () => import('./features/aircraft/aircraft-list/aircraft-list/aircraft-list').then(m => m.AircraftList),
        title: 'Aircrafts'
    },
    {
        path: 'assets/:id',
        loadComponent: () => import('./features/assets/asset-details/asset-details').then(m => m.AssetDetails),
        title: 'Asset Details'
    },
    {
        path: 'assets/new',
        loadComponent: () => import('./features/assets/new-asset/new-asset').then(m => m.NewAsset),
        title: 'New Asset'
    }
];