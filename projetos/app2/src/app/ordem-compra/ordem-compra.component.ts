import { Component, OnInit, ViewChild } from '@angular/core';
import { OrdemCompraService } from './../shared/services/ordem-compra.services'
import { Pedido } from '../shared/model/pedido.model'
import { NgForm } from '@angular/forms';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.scss'],
  providers: [ OrdemCompraService ]
})
export class OrdemCompraComponent implements OnInit {

  @ViewChild('formulario', { static: false }) public formulario: NgForm;

  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit() {

  }

  confirmarCompra(): void {
  }
}
