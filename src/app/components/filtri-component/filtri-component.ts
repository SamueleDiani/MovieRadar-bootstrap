import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-filtri-component',
  imports: [
    FormsModule
  ],
  templateUrl: './filtri-component.html',
  styleUrl: './filtri-component.css'
})
export class FiltriComponent {
  genrei: string[] = ['Action', 'Comedy', 'Drama', 'Crime', 'Sci-Fi'];
  @Output() filtriApplicati = new EventEmitter<any>();

  filtro  = {
    genere: '',
    valutazioneMin: null
  };

  applicaFiltri() {
    this.filtriApplicati.emit(this.filtro);
  }
}
