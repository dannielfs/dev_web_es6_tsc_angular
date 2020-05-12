import { Component, OnInit, ViewChild } from '@angular/core';
import { OrdemCompraService } from './../shared/services/ordem-compra.services'
import { Pedido } from '../shared/model/pedido.model'
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.scss'],
  providers: [ OrdemCompraService ]
})
export class OrdemCompraComponent implements OnInit {

  @ViewChild('formulario', { static: false }) public formulario: NgForm;

  idPedidoCompra: number;

  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit() {

  }

  confirmarCompra(): void {
    const form = this.formulario.value;

    const pedido: Pedido = new Pedido(
      this.formulario.value.endereco,
      this.formulario.value.numero,
      this.formulario.value.complemento,
      this.formulario.value.formaPagamento
    )
    this.ordemCompraService.efetivarCompra(pedido).subscribe(
      (resposta: number) => this.idPedidoCompra = resposta
    )
  }
}
