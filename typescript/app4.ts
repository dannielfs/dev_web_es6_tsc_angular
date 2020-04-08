// import { ConcessionariaDAO } from "./ConcessionariaDAO";
// import { PessoaDAO } from "./PessoaDAO";
import Concessionaria from "./Concessionaria";
import Pessoa from "./Pessoa";
import { Dao } from "./Dao";

//let dao: ConcessionariaDAO = new ConcessionariaDAO();
//let dao2: PessoaDAO = new PessoaDAO();

let concessionaria = new Concessionaria('',[]);
//dao.inserir(concessionaria);

let pessoa = new Pessoa('','');
//dao2.inserir(pessoa);

let dao3: Dao<Concessionaria> = new Dao<Concessionaria>();
dao3.inserir(concessionaria)

let dao4: Dao<Pessoa> = new Dao<Pessoa>();
dao4.remover(3);