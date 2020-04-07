import { DAOinterface } from "./DAOinterface";
import Pessoa from "./Pessoa";

export class PessoaDAO implements DAOinterface {
    
    nomeTabela: string = 'tb_pessoa';

    inserir(object: Pessoa): boolean {
        return true;
    }

    atualizar(object: Pessoa): boolean {
        return true;
    }

    remover(id: string): Pessoa {
        return new Pessoa('','');
    }

    selecionar(id: number): Pessoa {
        return new Pessoa('','')
    }

    selecionarTodos(): [any] {
        return [new Pessoa('','')];
    }
}