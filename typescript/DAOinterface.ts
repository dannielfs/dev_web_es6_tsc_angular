export interface DAOinterface {
    
    nomeTabela: string

    inserir(object: any): boolean;
    atualizar(object: any): boolean;
    remover(object: any): any;
    selecionar(id: number): any;
    selecionarTodos(): [any];

}