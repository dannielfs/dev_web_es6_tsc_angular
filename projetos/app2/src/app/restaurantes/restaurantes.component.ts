import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../shared/services/ofertas.services';
import { Oferta } from '../shared/model/oferta.model';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.scss']
})
export class RestaurantesComponent implements OnInit {

  public ofertas: Oferta[];

  constructor(
    private ofertaService: OfertasService
  ) { }

  ngOnInit() {
    this.ofertaService.getOfertasPorCategoria('restaurante')
    .then((ofertas: Oferta[]) => { this.ofertas = ofertas })
    .catch((err) => console.log(err))
  }

}
