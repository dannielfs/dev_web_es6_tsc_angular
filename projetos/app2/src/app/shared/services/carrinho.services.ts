import { ItemCarrinho } from './../model/item-carinho.model';
import { Oferta } from '../model/oferta.model';

class CarrinhoService {

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
    console.log(itemCarrinho);
  }


}

export default CarrinhoService;
