import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from 'src/app/shared/services/ofertas.services';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.scss']
})
export class OndeFicaComponent implements OnInit {

  public ondeFica: string = '';

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService
  ) { }

  ngOnInit() {
    const id = this.route.parent.snapshot.params['id'];
    this.ofertasService.getOndeFicaPorId(id)
    .then((descricao: string) => this.ondeFica = descricao)
    .catch((err) => console.log(err))
  }

}
