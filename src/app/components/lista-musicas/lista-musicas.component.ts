import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Musica } from "src/app/models/album.model";

@Component({
  selector: "app-lista-musicas",
  templateUrl: "./lista-musicas.component.html"
})
export class ListaMusicasComponent {
  @Input() musicas: Musica[] = [];
  @Output() onClickEvent = new EventEmitter<Musica>();

  onClick(musica: Musica): void {
    this.onClickEvent.emit(musica);
  }
}
