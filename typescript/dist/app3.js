"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Moto_1 = __importDefault(require("./Moto"));
var Carro_1 = __importDefault(require("./Carro"));
var moto = new Moto_1.default('suzuki');
console.log(moto);
var carro = new Carro_1.default('Corsa', 3);
console.log(carro);
