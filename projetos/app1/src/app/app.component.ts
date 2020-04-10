import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public jogoEmAndamento: boolean = true;
  public tipoEncerramento: string;

  public encerrarJogo(tipo: string): void {
    this.tipoEncerramento = tipo;
    this.jogoEmAndamento = false;
  }

  public reinicarJogo(): void {
    this.jogoEmAndamento = true;
    this.tipoEncerramento = undefined;
  }
}
