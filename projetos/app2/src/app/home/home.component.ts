import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../shared/services/ofertas.services';
import { Oferta } from '../shared/model/oferta.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [OfertasService]
})
export class HomeComponent implements OnInit {

  public ofertas: Array<Oferta>;

  constructor(
    private ofertasService: OfertasService
  ) { }

  ngOnInit() {

    this.ofertasService.getOfertas()
    .then(
      (ofertas) => {
        console.log('depois de 3 s')
        this.ofertas = ofertas
      })
    .catch(

    )
  }

}
