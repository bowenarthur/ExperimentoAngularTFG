import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Album } from "src/app/models/album.model";
import { AlbumService } from "src/app/app.service";

@Component({
  selector: "app-album",
  templateUrl: "./album.component.html"
})
export class AlbumComponent {
  @Input() album = {} as Album;
  @Output() mostrarDetalhesEvent = new EventEmitter<Album>();
  @Output() mostrarFormEvent = new EventEmitter<Album>();

  constructor(private service: AlbumService) {}

  mostrarDetalhes(): void {
    this.mostrarDetalhesEvent.emit(this.album);
  }

  mostrarForm(): void {
    this.mostrarFormEvent.emit(this.album);
  }

  deleteAlbum(id: string) {
    this.service.excluirAlbum(id);
  }
}
