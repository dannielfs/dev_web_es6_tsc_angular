import { ItemCarrinho } from './../model/item-carinho.model';
import { Oferta } from '../model/oferta.model';
import { filter } from 'rxjs/operators';

export class CarrinhoService {

  itens: ItemCarrinho[] = [];

  exibirItens(): ItemCarrinho[] {
    return this.itens;
  }

  incluirItem(oferta: Oferta): void {
    let itemCarrinho: ItemCarrinho = new ItemCarrinho(
      oferta.id,
      oferta.imagens[0],
      oferta.titulo,
      oferta.descricao_oferta,
      oferta.valor,
      1
    )
    const itemCarrinhoEncontrado = this.itens.find((res: ItemCarrinho) => { return itemCarrinho.id == res.id }) ;
    if (itemCarrinhoEncontrado) {
      itemCarrinhoEncontrado.quantidade++;
    } else {
      this.itens.push(itemCarrinho);
    }
  }

  totalCarrinhoCompras(): number {
    let total = 0;
    this.itens.forEach((item: ItemCarrinho) => {
      total += item.valor * item.quantidade;
    })
    return total;
  }

  adicionarQuantidade(itemCarrinho: ItemCarrinho): void {
    let itemCarrinhoEncontrado = this.itens.find((res: ItemCarrinho) => res.id === itemCarrinho.id);
    if (itemCarrinhoEncontrado) {
      itemCarrinhoEncontrado.quantidade++;
    }
  }

  removerQuantidade(itemCarrinho: ItemCarrinho): void {
    let itemCarrinhoEncontrado = this.itens.find((res: ItemCarrinho) => res.id === itemCarrinho.id);
    if (itemCarrinhoEncontrado) {
      itemCarrinhoEncontrado.quantidade--;
      if(itemCarrinhoEncontrado.quantidade === 0) {
        this.itens.splice(this.itens.indexOf(itemCarrinhoEncontrado),1);
      }
    }
  }

  limparCarrinho(): void {
    this.itens = [];
  }
}

