import { Component } from "@angular/core";
import { Album } from "./models/album.model";
import { AlbumService } from "./app.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  albuns: Album[] = [];
  album = {} as Album;
  openDetalhes = false;
  openForm = false;

  constructor(private service: AlbumService) {}

  ngOnInit(): void {
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/dragscroll/0.0.8/dragscroll.min.js";
    script.async = true;
    document.body.appendChild(script);
    this.fetchData();
  }

  fetchData(): void {
    this.service.lerAlbuns().then((res) => (this.albuns = res.data));
  }

  mostrarDetalhes(album: Album): void {
    this.album = album;
    this.openDetalhes = true;
  }

  fecharDetalhes(): void {
    this.album = {} as Album;
    this.openDetalhes = false;
  }

  mostrarForm(album: Album = {} as Album): void {
    this.album = album;
    this.openDetalhes = false;
    this.openForm = true;
  }

  fecharForm(): void {
    this.album = {} as Album;
    this.openForm = false;
    this.fetchData();
  }
}
