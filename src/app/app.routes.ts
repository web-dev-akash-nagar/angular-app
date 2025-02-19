import { Routes } from '@angular/router';
import { UsersComponent } from './features/components/users/users.component';
import { HomeComponent } from './features/components/home/home.component';

export const routes: Routes = [
    {path: '' , pathMatch: 'full' , redirectTo: 'users'},
    {path: 'home' , component: HomeComponent},
    {path: 'users' , component: UsersComponent},
];
