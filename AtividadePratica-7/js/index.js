

class Animal {
    codigo = 0;
    nome = '';
    dataNascimento = new Date();

    constructor(codigo, nome, dataNascimento) {
        this.codigo = codigo;
        this.nome = nome;
        this.dataNascimento = dataNascimento;
    }
}

class Ave extends Animal {
    tamanhoDoBico = 0;
    velocidadeVoo = 0;
    quantidadeAsas = 0;

    constructor(codigo, nome, dataNascimento, tamanhoDoBico) {
        super(codigo, nome, dataNascimento)
        this.tamanhoDoBico = tamanhoDoBico;
    }
}

class Peixe extends Animal {
    tipoDeAgua = '';
    possuiEscamas = ''
    possuiBarbatanas = ''

    constructor(codigo, nome, dataNascimento, tipoDeAgua) {
        super(codigo, nome, dataNascimento)
        this.tipoDeAgua = tipoDeAgua;
    }
}

class Mamifero extends Animal {
    possuiPelo = " ";
    velocidade = " ";
    possuiCalda = " ";

    constructor(codigo, nome, dataNascimento, possuiCalda) {
        super(codigo, nome, dataNascimento)
        this.possuiCalda = possuiCalda;
    }
}

class AveFalante extends Ave {
    vocabulario = [];

    constructor(codigo, nome, dataNascimento, tamanhoDoBico, vocabulario) {
        super(codigo, nome, dataNascimento, tamanhoDoBico)
        this.vocabulario = vocabulario;
    }
}

class AveNaoFalante extends Ave {
    tipoPiado = '';

    constructor(codigo, nome, dataNascimento, tamanhoDoBico, tipoPiado) {
        super(codigo, nome, dataNascimento, tamanhoDoBico)
        this.tipoPiado = tipoPiado;
    }
}

class Canino extends Mamifero {
    conseguelatir = ''
    conseguieUivar = ''
    constructor(codigo, nome, dataNascimento, possuiCalda, consegueLatir) {

        super(codigo, nome, dataNascimento, possuiCalda)
        this.consegueLatir = consegueLatir;
    }
}

class Felino extends Mamifero {
    consegueMiar = ''

    constructor(codigo, nome, dataNascimento, possuiCalda, consegueMiar) {
        super(codigo, nome, dataNascimento, possuiCalda)
        this.consegueMiar = consegueMiar;
    }
}


let novoAnimal = new Animal(1, 'Isis', new Date('2022-01-02'));
let novaAve = new Ave(1, 'Isis', new Date('2022-01-02'), 10);
novaAve.velocidadeVoo = 30

let novoFelino = new Felino(2, 'Fiona', new Date('2022-01-02'), 'sim', 'sim')

console.log(novoAnimal)
console.log(novaAve)
console.log(novoFelino)