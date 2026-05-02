import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard';
import { AssetsList } from './features/assets/assets-list/assets-list';


export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {
        path: 'dashboard',
        component: Dashboard,
        title: 'Dashboard'
    },
    {
        path: 'assets',
        component: AssetsList,
        title: 'Asset Operativi'
    }
];