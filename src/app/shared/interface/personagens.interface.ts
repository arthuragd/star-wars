import { ListarNaves } from './naves.interface';
import { ListarVeiculos } from './veiculos.interface';
import { ListarEspecies } from './especies.interface';
import { ListarPlanetas } from './planetas.interface';
import { ListarFilmes } from "./filmes.interface";

export interface ListarPersonagens{
	name: string;
	height:string;
	mass:string;
	hair_color:string;
	skin_color:string;
	eye_color:string;
	gender:string;
	count: number;
	next: string;
	films: Array<ListarFilmes>;
	homeworld: ListarPlanetas;
	species: Array<ListarEspecies>;
	vehicles: Array<ListarVeiculos>;
	starships: Array<ListarNaves>;
}