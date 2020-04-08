import { DaoInterface } from "./DaoInterface";

export class Dao<T> implements DaoInterface<T> {

 
    nomeTabela: string = '';

    inserir(object: T): boolean {
        console.log('Objeto Inserido');
        return true;
    }

    atualizar(object: T): boolean {
        console.log('Objeto Atualizado');
        return true;
    }

    remover(id: number): T {
        console.log('Objeto Removido');
        return Object();
    }

    selecionar(id: number): T {
        console.log('Objeto Selecionado');
        return Object();
    }

    selecionarTodos(): [T] {
        console.log('Objeto Todos Selecionado');
        return [Object()];
    }

}