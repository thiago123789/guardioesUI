import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Prato } from '../shared/model/prato.model';
import { Loja } from '../shared/model/loja.model';
import { Porcao } from '../shared/model/porcao.model';

@Injectable()
export class GerenciamentoLojaService {

  constructor(private http: HttpClient) { }

  addPrato(prato: Prato): Observable<Prato>{
    return this.http.post<Prato>(`http://localhost:2646/api/Loja/CriarNovoPrato`, prato);
  }

  addPorcao(porcao: Porcao): Observable<Porcao>{
    return this.http.post<Porcao>(`http://localhost:2646/api/Loja/CriarNovaPorcao`, porcao);
}

  getLojasVendedor(idVendedor: number): Observable<Loja[]>{
    return this.http.get<Loja[]>(`http://localhost:2646/api/Vendedor/ListarLojasDoVendedor?idVendedor=${idVendedor}`);
  }

}
