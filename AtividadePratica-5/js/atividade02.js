function contadorAlunos(alunos){

    function somaUsuario(){
        alunos++;
        return `${alunos - 1 }`;
    }
    return somaUsuario;
}



const contador = contadorAlunos(1)

class Aluno{
    #id = '';
    nome = '';
    constructor(aluno){
        this.#id = contador();
        this.nome = aluno;
    }
}

const primeiroAluno = new Aluno("Primeiro Aluno");
const segundoAluno = new Aluno("Segundo Aluno");


console.log(primeiroAluno);
console.log(segundoAluno);