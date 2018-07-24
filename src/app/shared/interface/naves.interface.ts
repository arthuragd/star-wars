import { ListarPersonagens } from './personagens.interface';
import { ListarFilmes } from "./filmes.interface";

export interface ListarNaves {
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: number;
    length: number;
    max_atmosphering_speed: number;
    crew: number;
    passengers: number;
    films: Array<ListarFilmes>;
    pilots: Array<ListarPersonagens>;
}