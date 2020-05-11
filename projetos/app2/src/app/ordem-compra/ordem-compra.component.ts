import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.scss']
})
export class OrdemCompraComponent implements OnInit {

  public endereco: string = '';
  public numero: string;
  public complemento: string = '';
  public formaPagamento: string = '';

  constructor() { }

  ngOnInit() {
  }

  atualizaEndereco(endereco: string): void {
    this.endereco = endereco;
  }

  atualizaNumero(numero: string): void {
    this.numero = numero;
  }

  atualizaComplemento(complemento: string): void {
    this.complemento = complemento;
  }

  atualizaFormaPagamento(pagamento: string): void {
    this.formaPagamento = pagamento;
  }

}
