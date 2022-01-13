export class ContaCorrente{
    agencia;
    #saldo = 0;

    sacar(valor){
        if(this.#saldo >= valor){
            this.#saldo -= valor;
        }else{
            console.log('Saldo indisponivel para saque');
        }
    }
    deposito(valor){
        if(valor <= 0){
            console.log('Valor indisponivel para deposito');
        }else{
            this.#saldo += valor;
        }
    }

}