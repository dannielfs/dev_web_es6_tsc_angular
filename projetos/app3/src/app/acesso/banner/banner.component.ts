import { Component, OnInit } from '@angular/core';
import { trigger, style, state, transition, animate } from '@angular/animations';
import { Imagem } from 'src/app/shared/model/imagem.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  animations: [
    trigger('banner',[
      state('escondido', style({
        opacity: 0
      })),
      state('visivel', style({
        opacity: 1
      })),
      transition('escondido <=> visivel', animate('2s ease-in')),
    ])
  ]
})
export class BannerComponent implements OnInit {

  estado: string = 'escondido';
  imagens: Imagem[] = [
    { estado: 'visivel', url: '../../../assets/banner-acesso/img_1.png'},
    { estado: 'escondido', url: '../../../assets/banner-acesso/img_2.png'},
    { estado: 'escondido', url: '../../../assets/banner-acesso/img_3.png'},
    { estado: 'escondido', url: '../../../assets/banner-acesso/img_4.png'},
    { estado: 'escondido', url: '../../../assets/banner-acesso/img_5.png'},
  ]

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => { this.logicaRotacao() }, 2000);
  }

  logicaRotacao(): void {
    const imagemSelecionada = this.imagens.find((imagem) => { return imagem.estado === 'visivel'; });

    let index = this.imagens.indexOf(imagemSelecionada);
    this.imagens[index].estado = 'escondido';
    index = index + 1;
    index = index >= this.imagens.length ? 0 : index;
    this.imagens[index].estado = 'visivel';

    setTimeout(() => { this.logicaRotacao() }, 2000);
  }

}
