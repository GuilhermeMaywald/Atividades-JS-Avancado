

function criarContadorNumerico(){
    let arrAlunos = [];

    function somaUsuario(){
        arrAlunos.push(`aluno ${arrAlunos.length + 1}`);
        console.log(arrAlunos);
    }
    return somaUsuario;
}
const contador = criarContadorNumerico(1);

const idPrimeiroAluno = contador();
const idSegundoAluno = contador();
const idTerceiroAluno = contador();

const novoContador = criarContadorNumerico(6);

novoContador();  // retorna número 6
novoContador(); // retorna número 7


// console.log(criarContadorNumerico());

// let aluno;

// function criarContadorNumerico(numeroAlunos){
//     function somaUsuario(){
//         numeroAlunos++
//         return aluno `${numeroAlunos - 1 }`;
//     }
//     return somaUsuario();
// }

// const contador = criarContadorNumerico(1);

// const idPrimeiroAluno = contador();
// const idSegundoAluno = contador();
// const idTerceiroAluno = contador();


// const novoContador = criarContadorNumerico(6);

// novoContador()  // retorna número 6
// novoContador() // retorna número 7