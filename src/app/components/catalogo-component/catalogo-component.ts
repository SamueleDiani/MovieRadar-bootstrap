import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {catalogo} from "../../mockData";
import {FilmServices} from '../../services/FilmServices';
import {Film} from '../../models/Film';
import {RouterLink} from '@angular/router';
import {FilmNotFoundComponent} from '../film-not-found-component/film-not-found-component';

@Component({
  selector: 'app-catalogo-component',
  imports: [
    RouterLink,
    FilmNotFoundComponent
  ],
  templateUrl: './catalogo-component.html',
  styleUrl: './catalogo-component.css'
})
export class CatalogoComponent implements OnInit, OnChanges {

  constructor( private service: FilmServices) {
  }
    // protected readonly catalogo = catalogo;
   @Input() filtri: any;
  listaFilm: Film[] = [];
  listaFilmCompleta: Film[] = [];

  ngOnInit() {
    this.listaFilmCompleta = this.service.getCatalogo();
    this.listaFilm = [...this.listaFilmCompleta]
  }

  ngOnChanges(changes: SimpleChanges) {
    const { genere, valutazioneMin } = this.filtri || {};
    this.listaFilm = this.listaFilmCompleta.filter(f => {
      return (!genere || f.genere === genere) &&
        (!valutazioneMin || f.valutazione >= valutazioneMin)
    });
  }
}
