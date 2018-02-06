import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Loja } from '../shared/model/loja.model';
import { Prato } from '../shared/model/prato.model';
import { Porcao } from '../shared/model/porcao.model';

@Injectable()
export class RealizarCompraService {

  private pratos: Prato[];

  constructor(private http: HttpClient) { }

  getLojas() : Observable<Loja[]> {
    return this.http.get<Loja[]>("http://localhost:2646/api/Loja/ListarLojas");            
  }

  getPratos(idLoja: number) : Observable<Prato[]> {
    return this.http.get<Prato[]>("http://localhost:2646/api/Loja/ListarPratosDaLoja?idLoja="+idLoja);
  } 

  getPorcoes(idLoja: number) : Observable<Porcao[]>  {
    return this.http.get<Porcao[]>('http://localhost:2646/api/Loja/ListarPorcoesLoja?idLoja='+idLoja);
  }

}
