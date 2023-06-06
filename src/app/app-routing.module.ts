import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElencoLibriComponent } from './components/elenco-libri/elenco-libri.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DettaglioLibroComponent } from './components/dettaglio-libro/dettaglio-libro.component';

const routes: Routes = [
  { path: '', component: ElencoLibriComponent }, //path iniziale
  { path: 'libro/:id', component: DettaglioLibroComponent }, //id è un parametro variabile
  { path: 'about', component: AboutComponent }, //localhost:4200/about --> restituisce la pagina con il componente About al posto di router-outlet
  { path: '**', component: NotFoundComponent } //qualsiasi url porta a questa pagina, quindi lo metto all'ultimo come una sorta di else, perchè il router fa il controllo in ordine
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
