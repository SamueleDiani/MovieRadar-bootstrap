import { Routes } from '@angular/router';
import {HomeComponent} from './components/home-component/home-component';
import {DettaglioFilm} from './components/dettaglio-film/dettaglio-film';
import {PageNotFoundComponent} from './components/page-not-found-component/page-not-found-component';
import {LoginComponent} from './components/login-component/login-component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'film/:id',
    component: DettaglioFilm,
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];
