import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { LibroComponent } from './components/libro/libro.component';
import { LibriService } from './services/libri.service';
import { TroncaPipe } from './pipes/tronca.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LibroComponent,
    TroncaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [LibriService],
  bootstrap: [AppComponent]
})
export class AppModule { }
