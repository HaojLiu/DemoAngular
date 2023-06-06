import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { LibroComponent } from './components/libro/libro.component';
import { LibriService } from './services/libri.service';
import { TroncaPipe } from './pipes/tronca.pipe';
import { FormsModule } from '@angular/forms';
import { RicercaComponent } from './components/ricerca/ricerca.component';
import { ElencoLibriComponent } from './components/elenco-libri/elenco-libri.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DettaglioLibroComponent } from './components/dettaglio-libro/dettaglio-libro.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LibroComponent,
    TroncaPipe,
    RicercaComponent,
    ElencoLibriComponent,
    AboutComponent,
    NotFoundComponent,
    DettaglioLibroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [LibriService],
  bootstrap: [AppComponent]
})
export class AppModule { }
