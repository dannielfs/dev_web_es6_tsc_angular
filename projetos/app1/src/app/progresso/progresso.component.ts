import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.scss']
})
export class ProgressoComponent implements OnInit {

  @Input() progresso: number;

  constructor() { }

  ngOnInit() { }


}
