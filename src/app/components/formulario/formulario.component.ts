import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Album, AlbumRequest, Musica } from "src/app/models/album.model";
import { AlbumService } from "src/app/app.service";

@Component({
  selector: "app-formulario",
  templateUrl: "./formulario.component.html"
})
export class FormularioComponent {
  @Input() album = {} as Album;
  @Output() fecharFormEvent = new EventEmitter<void>();
  categorias = [
    "Eletrônica",
    "MPB",
    "Pop",
    "Rap",
    "Reggae",
    "Rock",
    "Samba",
    "Sertanejo"
  ];

  constructor(private service: AlbumService) {}

  submit() {
    let data: AlbumRequest = {
      nome: this.album.nome,
      capa: this.album.capa,
      categoria: this.album.categoria,
      artista: this.album.artista,
      ano: this.album.ano,
      gravadora: this.album.gravadora,
      musicas: this.album.musicas
    };
    if (this.album._id) {
      this.service.atualizarAlbum(this.album._id, data);
    } else {
      this.service.inserirAlbum(data);
    }
  }

  fecharForm() {
    this.fecharFormEvent.emit();
  }

  atualizarMusicas(musicas: Musica[]) {
    this.album.musicas = musicas;
  }
}
