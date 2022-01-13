export class ContaCorrente{
    agencia;
    #saldo = 0;
    cliente;

    
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