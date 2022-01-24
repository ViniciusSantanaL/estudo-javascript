import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"


 const cliente1 = new Cliente("Ricardo","09476278633");
 
const cliente2 = new Cliente("Vinicius","41843087758");

const contaCorrente1 = new ContaCorrente(1001,cliente1);

const contaCorrente2 = new ContaCorrente(1002,cliente2);

contaCorrente1.deposito(100);
contaCorrente1.sacar(20);
contaCorrente1.transferencia(70,contaCorrente2);

console.log(contaCorrente1);
console.log(ContaCorrente.numeroTotalContas);

/* console.log('------- Lançamento de exceções !! --------');

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

console.log('------------------------------------------'); */

