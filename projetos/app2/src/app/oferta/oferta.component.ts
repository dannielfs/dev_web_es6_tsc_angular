import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { OfertasService } from '../shared/services/ofertas.services';
import { CarrinhoService } from '../shared/services/carrinho.services';

import { Oferta } from '../shared/model/oferta.model';
@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.scss']
})
export class OfertaComponent implements OnInit, OnDestroy {

  public oferta: Oferta;

  constructor(
    private route: ActivatedRoute,
    private ofertaService: OfertasService,
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((parametros: Params) => {
      this.ofertaService.getOfertaPorId(parametros.id)
      .then((oferta: Oferta) => this.oferta = oferta)
      .catch((err) => console.log(err))
    })
  }

  ngOnDestroy() {
  }

  adicionarItemCarrinho(oferta: Oferta): void {
    this.carrinhoService.incluirItem(oferta);
    console.log(this.carrinhoService.exibirItens());

  }
}
