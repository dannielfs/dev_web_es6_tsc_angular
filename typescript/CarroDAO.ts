import { DAOinterface } from "./DAOinterface";
import Carro from "./Carro";

export class CarroDAO implements DAOinterface {
    nomeTabela: string = 'tb_carro';

    inserir(object: Carro): boolean {
        return true;
    }

    atualizar(object: Carro): boolean {
        return true;
    }

    remover(id: number): Carro {
        return new Carro('', 0)
    }

    selecionar(id: number): Carro {
        return new Carro('', 0)
    }

    selecionarTodos(): [any] {
        return [new Carro('', 0)]
    }
}