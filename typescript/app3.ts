import Moto from "./Moto";
import Carro from "./Carro";
import Concessionaria from "./Concessionaria";

let moto = new Moto('suzuki');
moto.acelerar()
moto.acelerar()
console.log(moto);

let carro = new Carro('Corsa',3);
carro.acelerar()
carro.acelerar()
console.log(carro);

let consessionaria = new Concessionaria('', []);
console.log(consessionaria);
