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

  id: number = 0;
  libro?: Libro;
  
  constructor(private routeService: ActivatedRoute, private libriService: LibriService)
  {
    this.id = + this.routeService.snapshot.params['id']; //il + prova a convertire in numero
    if(!isNaN(this.id)) this.libriService.getOne(this.id).subscribe( r => this.libro = r );
  }
}
