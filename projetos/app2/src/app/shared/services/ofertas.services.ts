import { Oferta } from '../model/oferta.model';
import { OFERTA } from '../mock/oferta.mock';

export class OfertasService {

  public ofertas: Array<Oferta> = OFERTA;

  public getOfertas(): Array<any> {
    return this.ofertas;
  }

  public getOfertas2(): Promise<Oferta[]> {
    return new Promise(
      (resolve, reject) => {
        let deucerto = true;

        if (deucerto) {
          setTimeout(() => resolve(this.ofertas), 3000);
        } else {
          reject({ erro: 404, description: 'Servidor não encontrado'})
        }
      }
    ).then(
      (ofertas: Oferta[]) => {
        console.log('primeiro then');
        return ofertas;
      }
    ).then(
      (ofertas: Oferta[]) => {
        console.log('segundo then');
        return new Promise(
          (resolve2, reject2) => {
            setTimeout(() => { resolve2(ofertas)}, 3000);
          });
      }
    ).then((ofertas: Oferta[]) => {
      console.log('terceiro then apos 3 s')
      return ofertas;
    })
  }
}
