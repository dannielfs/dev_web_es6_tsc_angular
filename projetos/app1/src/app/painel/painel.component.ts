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
  public resposta: string = '';
  public rodada: number = 0;
  public rodadaFrase: Frase;
  public progresso: number = 0;
  public tentativas: number = 3;

  constructor() { }

  ngOnInit() {
    this.atualizaRodada();
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }

  public verificarResposta(): void {
    if (this.rodadaFrase.frasePtBr.toLowerCase() === this.resposta.toLowerCase()) {
      this.rodada++;
      this.progresso = this.progresso + (100 / this.frases.length);
      this.resposta = '';
      if (this.rodada < FRASE.length) {
        this.atualizaRodada();
      } else {
        alert('Você venceu!');
        this.rodada = 0;
        this.progresso = 0;
        this.tentativas = 3;
      }
    } else {
      this.tentativas--;
      this.resposta = '';
      if (this.tentativas === -1) {
        alert('Você perdeu!');
        this.rodada = 0;
        this.progresso = 0;
        this.tentativas = 3;
        this.atualizaRodada();
      }
    }
  }

  public atualizaRodada(): void {
    this.rodadaFrase = this.frases[this.rodada];
  }
}
