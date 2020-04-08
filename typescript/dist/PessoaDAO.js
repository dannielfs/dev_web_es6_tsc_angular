"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa_1 = __importDefault(require("./Pessoa"));
var PessoaDAO = /** @class */ (function () {
    function PessoaDAO() {
        this.nomeTabela = 'tb_pessoa';
    }
    PessoaDAO.prototype.inserir = function (object) {
        return true;
    };
    PessoaDAO.prototype.atualizar = function (object) {
        return true;
    };
    PessoaDAO.prototype.remover = function (id) {
        return new Pessoa_1.default('', '');
    };
    PessoaDAO.prototype.selecionar = function (id) {
        return new Pessoa_1.default('', '');
    };
    PessoaDAO.prototype.selecionarTodos = function () {
        return [new Pessoa_1.default('', '')];
    };
    return PessoaDAO;
}());
exports.PessoaDAO = PessoaDAO;
