import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    static numeroTotalContas = 0;
    #agencia;
    #saldo = 0;
    #cliente;

    constructor(agencia,cliente){
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroTotalContas ++; 
    }

    set cliente(valorCliente){
        if(valorCliente instanceof Cliente){
            this.#cliente = valorCliente;
        }
    }

    get cliente(){
        return this.#cliente;
    }

    set agencia(valorAgencia){
        this.#agencia = valorAgencia;
    }

    get agencia(){
        return this.#agencia;
    }
    
    sacar(valor){
        if(this.#saldo >= valor && valor > 0){
            this.#saldo -= valor
            console.log("Valor atual do Saldo após saque: R$"+ this.#saldo);
        }else{
            console.log('Saldo indisponivel para saque, Saldo: R$' + this.#saldo);
        }
    }
    deposito(valor){
        if(valor > 0){
            this.#saldo += valor;
            console.log("Valor atual do Saldo após deposito: R$"+ this.#saldo);
        }else{
            console.log('Valor inválido para deposito');
        }
    }

    transferencia(valor,conta){

        if(valor > 0){

            if(valor > this.#saldo){
                console.log('Saldo Insuficiente para Transferência, Saldo: R$' + this.#saldo);
                return;
            }
            const valorSacado = this.sacar(valor);
            conta.deposito(valorSacado);
            console.log("Valor atual do Saldo após transferencia: R$"+ this.#saldo);

        }else{
            console.log('Valor inválido para transferencia');
        }
    }

}