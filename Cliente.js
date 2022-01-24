export class Cliente{
    #nome;
    #cpf;

    constructor(nome,cpf){
        this.#cpf = cpf;
        this.#nome = nome;
    }

    set nome(valorNome){
        this.#nome = valorNome;
    }

    get nome(){
        return this.#nome;
    }

    get cpf(){
        return this.#cpf;
    }


}