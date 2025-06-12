import { Component } from '@angular/core';
import {CatalogoComponent} from '../catalogo-component/catalogo-component';

@Component({
  selector: 'app-home-component',
  imports: [
    CatalogoComponent
  ],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css'
})
export class HomeComponent {

}
