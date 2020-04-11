import { Oferta } from '../model/oferta.model';
import { OFERTA } from '../mock/oferta.mock';

export class OfertasService {

  public ofertas: Array<Oferta> = OFERTA;

  public getOfertas(): Array<any> {
    return this.ofertas;
  }
}
