import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../shared/services/ofertas.services';
import { Oferta } from '../shared/model/oferta.model';

@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.scss']
})
export class DiversaoComponent implements OnInit {

  public ofertas: Oferta[];
  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {

    this.ofertasService.getOfertasPorCategoria('diversao')
    .then((ofertas: Oferta[]) => {
      this.ofertas = ofertas
    })
    .catch((err) => { console.log(err);
    })
  }

}
