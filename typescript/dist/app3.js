"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Moto_1 = __importDefault(require("./Moto"));
var Carro_1 = __importDefault(require("./Carro"));
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var moto = new Moto_1.default('suzuki');
moto.acelerar();
moto.acelerar();
console.log(moto);
var carro = new Carro_1.default('Corsa', 3);
carro.acelerar();
carro.acelerar();
console.log(carro);
var consessionaria = new Concessionaria_1.default('', []);
