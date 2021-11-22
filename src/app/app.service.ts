import { Injectable } from "@angular/core";
import axios from "axios";
import { AlbumRequest } from "./models/album.model";

@Injectable({
  providedIn: "root"
})
export class AlbumService {
  private baseUrl = "https://frameworks-web.herokuapp.com/api/albuns";
  private headers = { matricula: "2021000000" };

  async lerAlbuns(categoria?: string): Promise<any> {
    const url = categoria
      ? `${this.baseUrl}?categoria=${categoria}`
      : this.baseUrl;
    return axios.get(url, { headers: this.headers }).catch(this.onError);
  }

  async inserirAlbum(data: AlbumRequest): Promise<any> {
    return axios
      .post(this.baseUrl, data, { headers: this.headers })
      .then(() => this.onSuccess("cadastrado"))
      .catch(this.onError);
  }

  async atualizarAlbum(id: string, data: AlbumRequest): Promise<any> {
    const url = `${this.baseUrl}/${id}`;
    return axios
      .put<any>(url, data, { headers: this.headers })
      .then((_) => this.onSuccess("alterado"))
      .catch(this.onError);
  }

  async excluirAlbum(id: string): Promise<any> {
    const url = `${this.baseUrl}/${id}`;
    return axios
      .delete<any>(url, { headers: this.headers })
      .then((_) => this.onSuccess("excluído"))
      .catch(this.onError);
  }

  private onSuccess(op: string): void {
    alert(`Álbum ${op} com sucesso`);
    window.location.reload();
  }

  private onError(e: any) {
    alert("Ocorreu um erro");
    console.log(e);
  }
}
