import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Musica } from "src/app/models/album.model";

@Component({
  selector: "app-edicao-musicas",
  templateUrl: "./edicao-musicas.component.html"
})
export class EdicaoMusicasComponent {
  @Input() musicas: Musica[] = [];
  @Output() atualizarMusicasEvent = new EventEmitter<Musica[]>();
  nome = "";
  duracao = "";

  adicionarMusica() {
    if (this.nome.trim() !== "" && this.duracao.trim() !== "") {
      let musicas = this.musicas ?? [];
      musicas.push({ nome: this.nome, duracao: this.duracao });

      this.atualizarMusicasEvent.emit(musicas);

      this.nome = "";
      this.duracao = "";
    }
  }

  removerMusica(musica: Musica) {
    const musicas = this.musicas.filter((item) => item.nome !== musica.nome);
    this.atualizarMusicasEvent.emit(musicas);
  }
}
