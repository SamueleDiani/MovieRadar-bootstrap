import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FilmServices} from '../../services/FilmServices';
import {Film} from '../../models/Film';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-dettaglio-film',
  imports: [
    NgStyle
  ],
  templateUrl: './dettaglio-film.html',
  styleUrl: './dettaglio-film.css'
})
export class DettaglioFilm implements OnInit{
film!: Film | undefined;
  constructor(private route: ActivatedRoute, private service: FilmServices) {
  }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.film = this.service.getFilmById(id);
  }
}
