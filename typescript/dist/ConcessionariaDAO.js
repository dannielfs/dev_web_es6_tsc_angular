"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var ConcessionariaDAO = /** @class */ (function () {
    function ConcessionariaDAO() {
        this.nomeTabela = '';
    }
    ConcessionariaDAO.prototype.inserir = function (object) {
        console.log('Concessinária inserida');
        return true;
    };
    ;
    ConcessionariaDAO.prototype.atualizar = function (object) {
        console.log('Concessinária atualizada');
        return true;
    };
    ConcessionariaDAO.prototype.remover = function (object) {
        console.log('Concessinária removida');
        return new Concessionaria_1.default('', []);
    };
    ConcessionariaDAO.prototype.selecionar = function (id) {
        console.log('Concessinária selecionada');
        return new Concessionaria_1.default('', []);
    };
    ConcessionariaDAO.prototype.selecionarTodos = function () {
        console.log('Lista de concessionaria');
        return [new Concessionaria_1.default('', [])];
    };
    return ConcessionariaDAO;
}());
exports.ConcessionariaDAO = ConcessionariaDAO;
