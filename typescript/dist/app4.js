"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ConcessionariaDAO_1 = require("./ConcessionariaDAO");
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var DAO = new ConcessionariaDAO_1.ConcessionariaDAO();
var concessionaria = new Concessionaria_1.default('', []);
DAO.inserir(concessionaria);
