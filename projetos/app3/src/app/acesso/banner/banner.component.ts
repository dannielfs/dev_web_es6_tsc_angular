import { Component, OnInit } from '@angular/core';
import { trigger, style, state } from '@angular/animations';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  animations: [
    trigger('banner',[
      state('escondido', style({
        opacity: 0
      })),
      state('visible', style({
        opacity: 1
      })
      )
    ])
  ]
})
export class BannerComponent implements OnInit {

  public estado: string = 'escondido';

  constructor() { }

  ngOnInit(): void {
  }

}
