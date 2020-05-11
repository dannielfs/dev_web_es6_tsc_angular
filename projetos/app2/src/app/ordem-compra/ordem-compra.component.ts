import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.scss']
})
export class OrdemCompraComponent implements OnInit {

  public endereco: string = '';
  public numero: string = '';
  public complemento: string = '';
  public formaPagamento: string = '';

  //controles de validacao dos campos

  public enderecoValido: boolean;
  public numeroValido: boolean;
  public complementoValido: boolean;
  public formaPagamentoValido: boolean;

  //estados primitivos

  public enderecoEstadoPrimitivo: boolean = true;
  public numeroEstadoPrimitivo: boolean = true;
  public complementeEstadoPrimitivo: boolean = true;
  public formaPagamentoEstadoPrimitivo: boolean = true;

  constructor() { }

  ngOnInit() {
    console.log(this.formaPagamento);

  }

  atualizaEndereco(endereco: string): void {
    this.endereco = endereco;
    this.enderecoEstadoPrimitivo = false;
    this.enderecoValido = this.endereco.length > 5 ? true : false;
  }

  atualizaNumero(numero: string): void {
    this.numero = numero;
    this.numeroEstadoPrimitivo = false;
    this.numeroValido = this.numero.length > 0 ? true : false;
  }

  atualizaComplemento(complemento: string): void {
    this.complemento = complemento;
    this.complementeEstadoPrimitivo = false;
    this.complementoValido = this.complemento.length > 1 ? true : false;
  }

  atualizaFormaPagamento(pagamento: string): void {
    this.formaPagamento = pagamento;
    this.formaPagamentoEstadoPrimitivo = false;
    this.formaPagamentoValido = this.formaPagamento.length > 0 ? true : false;
  }

}
