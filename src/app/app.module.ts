import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { DetalhesComponent } from "./components/detalhes/detalhes.component";
import { ListaMusicasComponent } from "./components/lista-musicas/lista-musicas.component";
import { EdicaoMusicasComponent } from "./components/edicao-musicas/edicao-musicas.component";
import { HeaderComponent } from './components/header/header.component';
import { ListaAlbunsComponent } from './components/lista-albuns/lista-albuns.component';
import { AlbumComponent } from './components/album/album.component';
import { FormularioComponent } from './components/formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    DetalhesComponent,
    ListaMusicasComponent,
    EdicaoMusicasComponent,
    HeaderComponent,
    ListaAlbunsComponent,
    AlbumComponent,
    FormularioComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
