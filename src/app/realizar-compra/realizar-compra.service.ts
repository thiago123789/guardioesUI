import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Loja } from '../share/model/loja.model';
import { Prato } from '../share/model/prato.model';
import { Porcao } from '../share/model/porcao.model';

@Injectable()
export class RealizarCompraService {

  private pratos: Prato[];

  constructor(private http: HttpClient) { }

  getLojas() : Observable<Loja[]> {
    return this.http.get<Loja[]>("");            
  }

  getPratos(idLoja: number) : Observable<Prato[]> {
    return this.http.get<Prato[]>("");
  } 

  getPorcoes(idLoja: number) : Observable<Porcao[]>  {
    return this.http.get<Porcao[]>("");
  }

}
