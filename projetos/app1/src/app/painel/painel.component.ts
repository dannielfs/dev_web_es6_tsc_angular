import { Component, OnInit } from '@angular/core';
import { FRASE } from './frases-mock';
import { Frase } from '../shared/frase.model';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements OnInit {

  public instrucao: string = 'Traduza a frase:'
  public frases: Array<Frase> = FRASE;
  public resposta: string;
  public rodada: number = 0;
  public rodadaFrase: Frase;

  constructor() { }

  ngOnInit() {
    this.rodadaFrase = this.frases[this.rodada];
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }

  public verificarResposta(): void {
    if (this.rodadaFrase.frasePtBr === this.resposta) {
      this.rodada++;
      this.rodadaFrase = this.frases[this.rodada];
    }
  }
}
