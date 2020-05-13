import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from '../shared/services/ordem-compra.services'
import { Pedido } from '../shared/model/pedido.model'
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { CarrinhoService } from './../shared/services/carrinho.services'
import { ItemCarrinho } from '../shared/model/item-carinho.model';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.scss']
})
export class OrdemCompraComponent implements OnInit {

  idPedidoCompra: number;
  itensCarrinho: ItemCarrinho[] = [];
  formulario: FormGroup = new FormGroup({
    'endereco': new FormControl(null, [Validators.required, Validators.min(3), Validators.maxLength(100)]),
    'numero': new FormControl(null, [Validators.required, Validators.min(3), Validators.maxLength(20)]),
    'complemento': new FormControl(null),
    'formaPagamento': new FormControl(null, [Validators.required])
  });

  constructor(
    private ordemCompraService: OrdemCompraService,
    private carrinhoService: CarrinhoService
    ) { }

  ngOnInit() {
    this.itensCarrinho = this.carrinhoService.exibirItens();
  }

  confirmarCompra(): void {

    if (this.formulario.status === 'INVALID') {
      Object.keys(this.formulario.value).forEach(
        (chave) => {
          this.formulario.get(chave).markAllAsTouched();
        }
      )
    } else {
      const pedido: Pedido = new Pedido(
        this.formulario.value.endereco,
        this.formulario.value.numero,
        this.formulario.value.complemento,
        this.formulario.value.formaPagamento
      );
      this.ordemCompraService.efetivarCompra(pedido).subscribe(
        (resposta) => this.idPedidoCompra = resposta
      )
    }
  }

  adicionar(item: ItemCarrinho):void {
    this.carrinhoService.adicionarQuantidade(item);
  }
  remover(item: ItemCarrinho): void {
    this.carrinhoService.removerQuantidade(item);
  }
}
