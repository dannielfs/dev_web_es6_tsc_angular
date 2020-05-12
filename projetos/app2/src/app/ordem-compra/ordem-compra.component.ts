import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from '../shared/services/ordem-compra.services'
import { Pedido } from '../shared/model/pedido.model'
import { FormGroup, FormControl, Validators} from '@angular/forms';
import CarrinhoService from './../shared/services/carrinho.services'

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.scss'],
  providers: [ OrdemCompraService, CarrinhoService ]
})
export class OrdemCompraComponent implements OnInit {

  public idPedidoCompra: number;
  public formulario: FormGroup = new FormGroup({
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

  }

  public confirmarCompra(): void {

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
}
