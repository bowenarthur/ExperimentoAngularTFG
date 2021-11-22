export interface Filme {
  _id: string;
  nome: string;
  foto: string;
  categoria: string;
  sinopse: string;
  ano: number;
  duracao: number;
  personagens: Personagem[];
}

export interface Personagem {
  _id?: string;
  nome: string;
  ator: string;
}

export interface FilmeRequest {
  nome: string;
  foto: string;
  categoria: string;
  sinopse: string;
  ano: number;
  duracao: number;
  personagens: Personagem[];
}
