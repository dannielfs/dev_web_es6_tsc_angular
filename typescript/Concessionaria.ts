import Carro from "./Carro";
import { ConcessionariaInterface } from './ConcessionariaInterface';

export default class Concessionaria implements ConcessionariaInterface{
    private endereco: string;
    private listaDeCarros: Array<Carro>;

    constructor(endereco: string, listaDeCarros: Array<Carro>) {
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }

    public fornecerEndereco(): string {
        return this.endereco;
    }

    public mostrarListaDeCarros(): Array<Carro> {
        return this.listaDeCarros;
    }

    public fornecerHorariosDeFuncionamento(): string {
        return 'De Segunda a Sexta das 08:00 Às 18:00 e sábado das 08:00 as 12:00'
    }
}