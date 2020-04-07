

import Carro from "./Carro";
import Concessionaria from "./Concessionaria";
import Pessoa from "./Pessoa";
import Moto from "./Moto";

/* Criar Carros*/
let carroA = new Carro('Fusca', 2);
let carroB = new Carro('Gol', 4);
let carroC = new Carro('Ferrari',2);

let motoA = new Moto('Yamarra');
let motoB = new Moto('Suzuki');

/*Criando a lista de carros da concessionaria*/
let concessionaria = new Concessionaria('Av Cesario alvim 666', [carroA, carroB, carroC]);

/*Criar cliente - Comprar carro*/
let cliente = new Pessoa('Danniel Sousa', 'Ferrari');

concessionaria.mostrarListaDeCarros().map(
    (carro: Carro) => {
        if (carro['modelo'] === cliente.dizerCarroPreferido()) {
            cliente.comprarCarro(carro);
        }
    }
)

console.log(cliente.dizerCarroQueTem());

