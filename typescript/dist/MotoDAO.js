"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Moto_1 = __importDefault(require("./Moto"));
var MotoDAO = /** @class */ (function () {
    function MotoDAO() {
        this.nomeTabela = 'tb_moto';
    }
    MotoDAO.prototype.inserir = function (object) {
        return true;
    };
    MotoDAO.prototype.atualizar = function (object) {
        return true;
    };
    MotoDAO.prototype.remover = function (id) {
        return new Moto_1.default('');
    };
    MotoDAO.prototype.selecionar = function (id) {
        return new Moto_1.default('');
    };
    MotoDAO.prototype.selecionarTodos = function () {
        return [new Moto_1.default('')];
    };
    return MotoDAO;
}());
exports.MotoDAO = MotoDAO;
