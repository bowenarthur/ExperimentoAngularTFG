export interface Album {
  _id: string;
  nome: string;
  capa: string;
  categoria: string;
  artista: string;
  gravadora: string;
  ano: number;
  musicas: Musica[];
}

export interface Musica {
  _id?: string;
  nome: string;
  duracao: string;
}

export interface AlbumRequest {
  nome: string;
  capa: string;
  categoria: string;
  artista: string;
  gravadora: string;
  ano: number;
  musicas: Musica[];
}
