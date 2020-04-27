import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"
import { OfertasService } from 'src/app/shared/services/ofertas.services';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.scss']
})
export class ComoUsarComponent implements OnInit {

  public comoUsar: string = '';

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService
    ) { }

  ngOnInit() {
    const id = this.route.parent.snapshot.params['id'];
    this.ofertasService.getComoUsarOfertasPorId(id)
    .then((descricao: string) => this.comoUsar = descricao)
  }

}
