import { Oferta } from '../model/oferta.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_API_OFERTAS, URL_API_COMO_USAR, URL_API_ONDE_FICA } from './../app.api';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
@Injectable()
export class OfertasService {

  constructor(
    private http: HttpClient
  ){}

  public getOfertas(): Promise<any> {
    return this.http.get(`${URL_API_OFERTAS}?destaque=true`)
    .toPromise()
    .then((resposta: any) =>  resposta)
  }

  public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
    return this.http.get(`${URL_API_OFERTAS}?categoria=${categoria}`)
    .toPromise()
    .then((resposta: any) => resposta);
  }

  public getOfertaPorId(id: number): Promise<Oferta> {
    return this.http.get(`${URL_API_OFERTAS}?id=${id}`)
    .toPromise()
    .then((resposta: any) => { return resposta[0]; })
  }

  public getComoUsarOfertasPorId(id: number): Promise<string> {
    return this.http.get(`${URL_API_COMO_USAR}?id=${id}`)
    .toPromise()
    .then((resposta: any) => resposta[0].descricao)
  }

  public getOndeFicaPorId(id: number): Promise<string> {
    return this.http.get(`${URL_API_ONDE_FICA}?id=${id}`)
    .toPromise()
    .then((resposta: any) => resposta[0].descricao)
  }

  public pesquisaOfertas(termo: string): Observable<Oferta[]> {
    return this.http.get(`${URL_API_OFERTAS}?descricao_oferta_like=${termo}`).pipe(
      map((resposta: any) => resposta.json())
    )
  }

 /*
  public ofertas: Array<Oferta> = OFERTA;

  public getOfertas2(): Promise<Oferta[]> {
    return new Promise(
      (resolve, reject) => {
        let deucerto = true;

        if (deucerto) {
          setTimeout(() => resolve(this.ofertas), 3000);
        } else {
          reject({ erro: 404, description: 'Servidor não encontrado'})
        }
      }
    ).then(
      (ofertas: Oferta[]) => {
        console.log('primeiro then');
        return ofertas;
      }
    ).then(
      (ofertas: Oferta[]) => {
        console.log('segundo then');
        return new Promise(
          (resolve2, reject2) => {
            setTimeout(() => { resolve2(ofertas)}, 3000);
          });
      }
    ).then((ofertas: Oferta[]) => {
      console.log('terceiro then apos 3 s')
      return ofertas;
    })
  } */
}
