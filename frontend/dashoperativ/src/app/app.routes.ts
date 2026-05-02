import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard';
import { AssetsList } from './features/assets/assets-list/assets-list';


export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {
        path: 'dashboard',
        loadComponent: () => import('./features/dashboard/dashboard').then(m => m.Dashboard),
        title: 'Dashboard'
    },
    {
        path: 'assets',
        loadComponent: () => import('./features/assets/assets-list/assets-list').then(m => m.AssetsList),
        title: 'Asset Operativi'
    }
];