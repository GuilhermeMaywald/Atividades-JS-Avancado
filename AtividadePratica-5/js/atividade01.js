

class Aluno {
    #id = 0;
    nome = '';
    endereco = '';
    data_nascimento = '';
    email = '';
    telefone = '';
    avaliacao = [];

    constructor(nome){
        this.nome = nome;
    }
}

class Avaliacao {
    tipo = '';
    nota = 0;
    observacao = '';

    constructor(tipo){
        this.tipo = tipo;
    }
}


