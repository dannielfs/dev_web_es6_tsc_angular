import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
//import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms'

import localePt from "@angular/common/locales/pt";

import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { HomeComponent } from './home/home.component';
import { RodapeComponent } from './rodape/rodape.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { DiversaoComponent } from './diversao/diversao.component';
import { AppRoutingModule } from './app-routing.module';
import { OfertasService } from './shared/services/ofertas.services';
import { OfertaComponent } from './oferta/oferta.component';
import { ComoUsarComponent } from './oferta/como-usar/como-usar.component';
import { OndeFicaComponent } from './oferta/onde-fica/onde-fica.component';

import { DescricaoReduzida } from './shared/pipe/descricao-reduzida.pipe';
import { OrdemCompraComponent } from './ordem-compra/ordem-compra.component';
import { OrdemCompraService } from './shared/services/ordem-compra.services';
import { OrdemCompraSucessoComponent } from './ordem-compra-sucesso/ordem-compra-sucesso.component';
import { CarrinhoService } from './shared/services/carrinho.services';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    HomeComponent,
    RodapeComponent,
    RestaurantesComponent,
    DiversaoComponent,
    OfertaComponent,
    ComoUsarComponent,
    OndeFicaComponent,
    DescricaoReduzida,
    OrdemCompraComponent,
    OrdemCompraSucessoComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    //FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    OfertasService,
    OrdemCompraService,
    CarrinhoService,
    { provide:LOCALE_ID, useValue: 'pt' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

registerLocaleData(localePt);
