import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html"
})
export class HeaderComponent {
  @Output() mostrarFormEvent = new EventEmitter<void>();

  mostrarForm() {
    this.mostrarFormEvent.emit();
  }
}
