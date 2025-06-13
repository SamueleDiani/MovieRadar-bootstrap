import { Component } from '@angular/core';
import {RouterModule, RouterOutlet} from '@angular/router';
import {HeaderComponent} from './components/header-component/header-component';
import {FooterComponent} from './components/footer-component/footer-component';

@Component({
  selector: 'app-root',
  imports: [RouterModule, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'MovieRadar';
}
