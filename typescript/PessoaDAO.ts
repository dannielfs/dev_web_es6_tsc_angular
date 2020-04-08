import { DaoInterface } from "./DaoInterface";
import Pessoa from "./Pessoa";

export class PessoaDAO implements DaoInterface<Pessoa> {
    
    nomeTabela: string = 'tb_pessoa';

    inserir(object: Pessoa): boolean {
        return true;
    }

    atualizar(object: Pessoa): boolean {
        return true;
    }

    remover(id: number): Pessoa {
        return new Pessoa('','');
    }

    selecionar(id: number): Pessoa {
        return new Pessoa('','')
    }

    selecionarTodos(): [any] {
        return [new Pessoa('','')];
    }
}