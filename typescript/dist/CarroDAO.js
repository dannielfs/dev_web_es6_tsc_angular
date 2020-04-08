"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./Carro"));
var CarroDAO = /** @class */ (function () {
    function CarroDAO() {
        this.nomeTabela = 'tb_carro';
    }
    CarroDAO.prototype.inserir = function (object) {
        return true;
    };
    CarroDAO.prototype.atualizar = function (object) {
        return true;
    };
    CarroDAO.prototype.remover = function (id) {
        return new Carro_1.default('', 0);
    };
    CarroDAO.prototype.selecionar = function (id) {
        return new Carro_1.default('', 0);
    };
    CarroDAO.prototype.selecionarTodos = function () {
        return [new Carro_1.default('', 0)];
    };
    return CarroDAO;
}());
exports.CarroDAO = CarroDAO;
