import { Component } from '@angular/core';
import { Libro } from 'src/app/model/libro';
import { LibriService } from 'src/app/services/libri.service';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent {
  libriService : LibriService;
  libro: Libro;

  constructor()
  {
    this.libriService = new LibriService();
    this.libro = this.libriService.getRandom();
  }
}
