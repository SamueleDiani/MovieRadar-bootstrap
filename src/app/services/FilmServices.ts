import {Injectable} from '@angular/core';
import {Film} from '../models/Film';
import {catalogo} from '../mockData';

@Injectable({ providedIn: 'root' })
export class FilmServices {
  private catalogo: Film[] = catalogo;

  getFilmById(id: number): Film | undefined{
    return this.catalogo.find(film => film.id === id);
  }

  getCatalogo(): Film[] {
    return this.catalogo;
  }
}
