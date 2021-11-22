import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Album } from "src/app/models/album.model";

@Component({
  selector: "app-lista-albuns",
  templateUrl: "./lista-albuns.component.html"
})
export class ListaAlbunsComponent {
  @Input() titulo = "";
  @Input() albuns: Album[] = [];
  @Output() mostrarDetalhesEvent = new EventEmitter<Album>();
  @Output() mostrarFormEvent = new EventEmitter<Album>();

  mostrarDetalhes(album: Album) {
    this.mostrarDetalhesEvent.emit(album);
  }

  mostrarForm(album: Album) {
    this.mostrarFormEvent.emit(album);
  }
}
