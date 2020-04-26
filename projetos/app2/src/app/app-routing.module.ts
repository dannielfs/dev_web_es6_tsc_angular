import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { DiversaoComponent } from './diversao/diversao.component';
import { OfertaComponent } from './oferta/oferta.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'restaurantes', component: RestaurantesComponent},
  { path: 'diversao', component: DiversaoComponent},
  { path: 'oferta', component: HomeComponent},
  { path: 'oferta/:id', component: OfertaComponent},
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
