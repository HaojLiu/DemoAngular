import { Component } from '@angular/core';
import { LibriService } from './services/libri.service';
import { Libro } from './model/libro';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Libreria Biblioteca';

  libri: Libro[];

  constructor(private libriService: LibriService){
    this.libri = libriService.getAll();
  }

  cerca(valore: string): void
  {
    this.libri = this.libriService.find(valore);
  }
}
