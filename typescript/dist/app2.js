"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./Carro"));
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
var Moto_1 = __importDefault(require("./Moto"));
/* Criar Carros*/
var carroA = new Carro_1.default('Fusca', 2);
var carroB = new Carro_1.default('Gol', 4);
var carroC = new Carro_1.default('Ferrari', 2);
var motoA = new Moto_1.default('Yamarra');
var motoB = new Moto_1.default('Suzuki');
/*Criando a lista de carros da concessionaria*/
var concessionaria = new Concessionaria_1.default('Av Cesario alvim 666', [carroA, carroB, carroC]);
/*Criar cliente - Comprar carro*/
var cliente = new Pessoa_1.default('Danniel Sousa', 'Ferrari');
concessionaria.mostrarListaDeCarros().map(function (carro) {
    if (carro['modelo'] === cliente.dizerCarroPreferido()) {
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroQueTem());
