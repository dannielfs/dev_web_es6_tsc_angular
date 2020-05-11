import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from '../shared/services/ordem-compra.services';
import { Pedido } from '../shared/model/pedido.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.scss']
})
export class OrdemCompraComponent implements OnInit {

  public idPedidoCompra: number;

  //pedido
  public pedido: Pedido = new Pedido('','','','');
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

  public formStado = 'disabled';

  constructor(
    private ordemCompraService: OrdemCompraService
  ) { }

  ngOnInit(
  ) {
  }

  atualizaEndereco(endereco: string): void {
    this.endereco = endereco;
    this.enderecoEstadoPrimitivo = false;
    this.enderecoValido = this.endereco.length > 5 ? true : false;
    this.habilitaForm();
  }

  atualizaNumero(numero: string): void {
    this.numero = numero;
    this.numeroEstadoPrimitivo = false;
    this.numeroValido = this.numero.length > 0 ? true : false;
    this.habilitaForm();
  }

  atualizaComplemento(complemento: string): void {
    this.complemento = complemento;
    this.complementeEstadoPrimitivo = false;
    this.complementoValido = this.complemento.length > 1 ? true : false;
    this.habilitaForm();
  }

  atualizaFormaPagamento(pagamento: string): void {
    this.formaPagamento = pagamento;
    this.formaPagamentoEstadoPrimitivo = false;
    this.formaPagamentoValido = this.formaPagamento.length > 0 ? true : false;
    this.habilitaForm();
  }

  habilitaForm(): void {
    if (this.enderecoValido && this.numeroValido && this.formaPagamentoValido) {
      this.formStado = ''
    } else {
      this.formStado = 'disabled'
    }
  }

  confirmarCompra(): void {
    this.pedido.endereco = this.endereco;
    this.pedido.complemento = this.complemento;
    this.pedido.formaPagamento = this.formaPagamento;
    this.pedido.numero = this.numero;
    this.ordemCompraService.efetivarCompra(this.pedido).subscribe(
      (res: number) => {
        this.idPedidoCompra = res;
      }
    );
  }
}
