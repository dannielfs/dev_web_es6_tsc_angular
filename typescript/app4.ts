import { ConcessionariaDAO } from "./ConcessionariaDAO";
import Concessionaria from "./Concessionaria";

let DAO = new ConcessionariaDAO();
let concessionaria = new Concessionaria('',[]);

DAO.inserir(concessionaria);