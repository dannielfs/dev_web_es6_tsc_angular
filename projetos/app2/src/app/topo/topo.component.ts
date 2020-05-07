import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../shared/services/ofertas.services';
import { Oferta } from '../shared/model/oferta.model';
import { Observable, Subject, of } from 'rxjs';
import { switchMap, map, debounceTime,  } from 'rxjs/operators';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.scss']
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Oferta[]>;
  private subjectPesquisa: Subject<string> = new Subject<string>();

  constructor(
    private ofertaService: OfertasService
  ) { }

  ngOnInit() {
    this.ofertas = this.subjectPesquisa.pipe(
      debounceTime(1000),
      switchMap((termo: string) => {
        if (termo.trim() === '') {
          return of<Oferta[]>([]);
        }
        return this.ofertaService.pesquisaOfertas(termo);
      })
    )

    this.ofertas.subscribe((ofertas: Oferta[]) => console.log(ofertas));
  }

  public pesquisa(termoDaPesquisa: string): void {
    this.subjectPesquisa.next(termoDaPesquisa)
  }
}
