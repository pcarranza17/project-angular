import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './components/crud/crud.component';
import { CreateComponent } from './components/crud/create/create.component';
import { EditComponent } from './components/crud/edit/edit.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: CrudComponent,  pathMatch: 'full'},
    { path: 'crud/create', component: CreateComponent,  pathMatch: 'full'},
    { path: 'crud/:id', component: EditComponent,  pathMatch: 'full'},
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);