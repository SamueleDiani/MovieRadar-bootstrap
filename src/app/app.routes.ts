import { Routes } from '@angular/router';
import {HomeComponent} from './components/home-component/home-component';
import {DettaglioFilm} from './components/dettaglio-film/dettaglio-film';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'film/:id',
    component: DettaglioFilm,
  }
];
