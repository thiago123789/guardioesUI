import { CategoriaPorcao } from "./categoria-porcao.model";

export interface Porcao {
    Item: string;
    Quantidade: number;
    Preco: number;
    CategoriaPorcao: CategoriaPorcao;
    DataCriacao: Date;
    UltimaModificacao: Date;
}