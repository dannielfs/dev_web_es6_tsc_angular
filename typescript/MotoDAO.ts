import { DAOinterface } from "./DAOinterface";
import Moto from "./Moto";

export class MotoDAO implements DAOinterface {

    nomeTabela: string = 'tb_moto';

    inserir(object: Moto): boolean {
        return true;
    }

    atualizar(object: Moto): boolean {
        return true;
    }

    remover(id: number): Moto {
        return new Moto('');
    }

    selecionar(id: number): Moto {
        return new Moto('');
    }

    selecionarTodos(): [any] {
        return [new Moto('')];
    }
 }