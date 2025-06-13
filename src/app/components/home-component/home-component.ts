import { Component } from '@angular/core';
import {CatalogoComponent} from '../catalogo-component/catalogo-component';
import {FiltriComponent} from '../filtri-component/filtri-component';

@Component({
  selector: 'app-home-component',
  imports: [
    CatalogoComponent,
    FiltriComponent
  ],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css'
})
export class HomeComponent {
  filtriAttivi: any = {};

  aggiornaFiltri(nuoviFiltri: any) {
    this.filtriAttivi = {...nuoviFiltri};
  }
}
