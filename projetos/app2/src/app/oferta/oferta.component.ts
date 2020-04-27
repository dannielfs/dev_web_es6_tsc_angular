import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../shared/services/ofertas.services';
import { Oferta } from '../shared/model/oferta.model';

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

/*     this.route.params.subscribe(
      (res) => {
        console.log(res);
    }) */
  }

}
