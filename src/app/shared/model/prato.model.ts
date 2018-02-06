import { Porcao } from "./porcao.model";

export interface Prato {
    IdLoja: number;
    Id: number;
    Preco: number;
    Porcoes: Porcao[];
}