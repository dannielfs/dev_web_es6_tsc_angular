import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../shared/services/ofertas.services';
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
    private ofertaService: OfertasService
  ) { }

  ngOnInit() {
    const id: number = this.route.snapshot.params['id'];
    this.ofertaService.getOfertaPorId(id)
    .then((oferta: Oferta) => this.oferta = oferta)
    .catch((err) => console.log(err))
  }

  ngOnDestroy() {
  }
}
