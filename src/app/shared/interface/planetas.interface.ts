import { ListarFilmes } from './filmes.interface';
import { ListarPersonagens } from './personagens.interface';

export interface ListarPlanetas {
    name: string;
    rotation_period: number;
    orbital_period: number;
    diameter: number;
    climate: string;
    gravity: string;
    terrain: string;
    url: string;
    surface_water: number;
    population: number;
    films: Array<ListarFilmes>;
    residents: Array<ListarPersonagens>;
}