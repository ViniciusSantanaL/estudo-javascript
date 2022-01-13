import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"


const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = "060.727.501-41";

const cliente2 = new Cliente();
cliente2.nome = "Vinicius"
cliente2.cpf = "688.038.663-15"


const contaCorrente1 = new ContaCorrente();

contaCorrente1.agencia = 1001;
contaCorrente1.cliente = cliente1;

const contaCorrente2 = new ContaCorrente();

contaCorrente2.agencia = 1002;
contaCorrente2.cliente = cliente2;

contaCorrente1.deposito(100);
contaCorrente1.sacar(20);
contaCorrente1.transferencia(70,contaCorrente2);

console.log('------- Lançamento de exceções !! --------');

console.log('------- Deposito --------');
contaCorrente1.deposito(-1);
contaCorrente1.deposito(0);
contaCorrente1.deposito('a');

console.log('------- Sacar --------');
contaCorrente1.sacar(-1);
contaCorrente1.sacar(0);
contaCorrente1.sacar('a');
contaCorrente1.sacar(90);

console.log('------- Transferencia --------');
contaCorrente1.transferencia(90,contaCorrente1);
contaCorrente1.transferencia(0,contaCorrente1);
contaCorrente1.transferencia(-1,contaCorrente1);
contaCorrente1.transferencia('a',contaCorrente1);

console.log('------------------------------------------');



console.log(cliente1);

console.log(cliente2);