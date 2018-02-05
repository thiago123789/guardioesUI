import { Porcao } from "./porcao.model";

export interface Prato {
    IdLoja: number;
    Preco: number;
    Porcoes: Porcao[];
    DataCriacao: DateTimeFormat;
    UltimaModificacao: DateTimeFormat;
}