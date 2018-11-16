function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

Pessoa.prototype.andar = function(){
    return this.nome + ' andou';
}

const andre = new Pessoa('Andre', 29);

console.log(Pessoa.prototype);
console.log(andre.prototype);