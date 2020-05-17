import { ItemCarrinho } from './item-carinho.model';

export class Pedido {

  constructor(
    public endereco: string,
    public numero: string,
    public complemento: string,
    public formaPagamento:string,
    public itens: ItemCarrinho[]
    ) {}

}
