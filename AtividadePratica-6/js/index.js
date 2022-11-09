/*
Na aula de Abstração, foi feito uma estrutura de Classe para Aluno e Avaliação. Com base nas Classes criadas nos últimos exercícios da aula de Abstração, implemente as seguintes funcionalidades às Classes:

a. Crie uma propriedade readonly com nome Idade na Classe Aluno, que retornará à idade do aluno calculando com base na data de nascimento que foi setada. 

b. Caso o aluno não possua data de nascimento setada, deverá ser gerado um throw com o erro “Data de Nascimento não informada”.

c. Crie um método chamado adicionarAvaliacao, que receberá uma avaliação por parâmetro e armazenará na propriedade array privada avaliacoes da Class Aluno.

d. Crie um método chamado obterMedia que terá por responsabilidade devolver a média das notas do Aluno com base nas avaliações setadas.

e. Crie uma propriedade readonly chamada aprovado, que retornará “True” ou “False” com base nas avaliações do aluno. Caso o aluno possua média maior ou igual a 7 retornar true senão retornará false.
*/


class Aluno {
    #id = 0;
    nome = '';
    endereco = '';
    data_nascimento;
    email = '';
    telefone = '';
    #avaliacao = [];

    constructor(nome, data_nascimento) {
        this.nome = nome;
        this.data_nascimento = data_nascimento;

        if (!data_nascimento) {
            throw new Error('Data de Nascimento não informada');
        }
    }

    get idade() {

        const today = new Date();
        const birthDate = new Date(this.data_nascimento);
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();

        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        return age;    
    }

    get avaliacao() {
        return [...this.#avaliacao];
    }

    adicionarAvaliacao(avaliacao) {
        this.#avaliacao.push(avaliacao);
        // console.log(avaliacao);
    }
    
    obterMedia() {
        let somaNotas = this.#avaliacao.reduce((prev, cur) =>{
            return (prev + cur);
        },0);
        return somaNotas / this.#avaliacao.length;
    }

    get aprovado(){
        let media = this.obterMedia()
        if(media >= 7) {
            return true;
        } 
        return false;
    }

}


class Avaliacao {
    tipo = '';
    nota = 0;
    observacao = '';

    constructor(tipo) {
        this.tipo = tipo;
    }
}

let guilherme = new Aluno(`Guilherme`, '02/04/1977');

// let agnos = new Aluno('Agnos');
// console.log(agnos)

guilherme.adicionarAvaliacao(5)
guilherme.adicionarAvaliacao(8)
guilherme.adicionarAvaliacao(10)

console.log(guilherme.obterMedia())
console.log(guilherme.aprovado)
