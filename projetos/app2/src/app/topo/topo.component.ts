import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../shared/services/ofertas.services';
import { Oferta } from '../shared/model/oferta.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.scss']
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Oferta[]>
  constructor(
    private ofertaService: OfertasService
  ) { }

  ngOnInit() {
  }

  public pesquisa(termoDaPesquisa: string): void {
    this.ofertas = this.ofertaService.pesquisaOfertas(termoDaPesquisa);
    this.ofertas.subscribe(
      (ofertas: Oferta[]) => {
        console.log(ofertas);

      }
    )
  }
}
