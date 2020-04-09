import { Component, OnInit } from '@angular/core';
import { FRASE } from './frases-mock';
import { Frase } from '../shared/frase.model';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements OnInit {

  public frase: Array<Frase> = FRASE;
  constructor() { }

  ngOnInit() {
  }

}
