import { DAOinterface } from "./DAOinterface";
import Concessionaria from "./Concessionaria";

export class ConcessionariaDAO implements DAOinterface {

    nomeTabela: string = '';
    
    inserir(object: Concessionaria): boolean {
        console.log('Concessinária inserida');
        return true
    };
    
    atualizar(object: Concessionaria): boolean {
        console.log('Concessinária atualizada');
        return true
    }
    
    remover(object: Concessionaria): Concessionaria {
        console.log('Concessinária removida');
        return new Concessionaria('',[]);
    }
    
    selecionar(id: number): Concessionaria {
        console.log('Concessinária selecionada');
        return new Concessionaria('', []);
    }
    
    selecionarTodos(): [any] {
        console.log('Lista de concessionaria');
        return [new Concessionaria('', [])];

    }

}