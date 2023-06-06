import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ricerca',
  templateUrl: './ricerca.component.html',
  styleUrls: ['./ricerca.component.css']
})
export class RicercaComponent {
  stringaRicerca: string = "";

  @Output() cercaEvent = new EventEmitter();

  cerca(): void
  {
    this.cercaEvent.emit(this.stringaRicerca);
  }

  pulisci(): void
  {
    this.stringaRicerca = '';
    this.cerca();
  }
}
