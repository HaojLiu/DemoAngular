import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Libro } from 'src/app/model/libro';
import { LibriService } from 'src/app/services/libri.service';

@Component({
  selector: 'app-dettaglio-libro',
  templateUrl: './dettaglio-libro.component.html',
  styleUrls: ['./dettaglio-libro.component.css']
})
export class DettaglioLibroComponent {

  id: number;
  libro?: Libro;
  libri: Libro[];
  
  constructor(private routeService: ActivatedRoute, public libriService: LibriService)
  {
    this.libri = libriService.getAll();
    this.id = this.routeService.snapshot.params['id'];
    this.libriService.getOne(this.id);
  }
}
