"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dao = /** @class */ (function () {
    function Dao() {
        this.nomeTabela = '';
    }
    Dao.prototype.inserir = function (object) {
        console.log('Objeto Inserido');
        return true;
    };
    Dao.prototype.atualizar = function (object) {
        console.log('Objeto Atualizado');
        return true;
    };
    Dao.prototype.remover = function (id) {
        console.log('Objeto Removido');
        return Object();
    };
    Dao.prototype.selecionar = function (id) {
        console.log('Objeto Selecionado');
        return Object();
    };
    Dao.prototype.selecionarTodos = function () {
        console.log('Objeto Todos Selecionado');
        return [Object()];
    };
    return Dao;
}());
exports.Dao = Dao;
