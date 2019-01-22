import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { ExhibitListComponent } from './admin/view/exhibit-list.component';
import { CabinetListComponent } from './admin/view/cabinet-list.component';
import { CabinetComponent } from './admin/view/cabinet.component';
import { ExhibitComponent } from './admin/view/exhibit.component';


export const routes: Routes = [
    { path: '', component: ExhibitListComponent },
    { path: 'cabinet-list', component: CabinetListComponent },
    { path: 'cabinet', component: CabinetComponent },
    { path: 'exhibit', component: ExhibitComponent }
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
