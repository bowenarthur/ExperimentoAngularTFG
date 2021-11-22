import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Album } from "src/app/models/album.model";

@Component({
  selector: "app-detalhes",
  templateUrl: "./detalhes.component.html"
})
export class DetalhesComponent {
  @Input() album = {} as Album;
  @Output() fecharDetalhesEvent = new EventEmitter<void>();

  fecharDetalhes(): void {
    this.fecharDetalhesEvent.emit();
  }
}
