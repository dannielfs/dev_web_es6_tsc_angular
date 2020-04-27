import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../shared/services/ofertas.services';
import { Oferta } from '../shared/model/oferta.model';
import { interval, Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.scss']
})
export class OfertaComponent implements OnInit {

  public oferta: Oferta;

  constructor(
    private route: ActivatedRoute,
    private ofertaService: OfertasService
  ) { }

  ngOnInit() {
    const id: number = this.route.snapshot.params['id'];
    this.ofertaService.getOfertaPorId(id)
    .then((oferta: Oferta) => this.oferta = oferta)
    .catch((err) => console.log(err))

  /*
    this.route.params.subscribe(
      (res) => {
        console.log(res);
    })

    interval(500).subscribe((intervalo: number) => {
      console.log(intervalo);
    });
  */

  let observableTeste = Observable.create(
    (observer: Observer<string>)=> {
      observer.next('teste de criação')
      observer.next('teste de criação 2')
      observer.complete()
      observer.next('teste de criação 2')
    })

    observableTeste.subscribe(
      (res: string)=>{
        console.log(res);
      },
      (erro: string) => {
        console.log(erro)
      },
      () => {
        console.log('O observable finalizou');

      }
    )
  }


}
