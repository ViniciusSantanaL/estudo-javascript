import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"


cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = "060.727.501-41";


const contaCorrenteRicardo = new ContaCorrente();

contaCorrenteRicardo.saldo = 0;
contaCorrenteRicardo.agencia = 1001;


const contaCorrenteAlice = new ContaCorrente();

contaCorrenteAlice.saldo = 10;
contaCorrenteAlice.agencia = 1011;


contaCorrenteAlice.deposito(10);
contaCorrenteAlice.sacar(5);
contaCorrenteAlice.sacar(6);
contaCorrenteAlice.deposito(-1);


console.log(cliente1);