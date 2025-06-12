import { Component } from '@angular/core';
import {catalogo} from "../../mockData";

@Component({
  selector: 'app-catalogo-component',
  imports: [],
  templateUrl: './catalogo-component.html',
  styleUrl: './catalogo-component.css'
})
export class CatalogoComponent {

    protected readonly catalogo = catalogo;
}
