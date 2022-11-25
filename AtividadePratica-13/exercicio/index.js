import {CriarNovaTurma, getTurmas} from './services/turma-service.js'

/**
 * Função responsavel por atualizar a tabela de turmas com os alunos
 */
function atualizarTela(){
    const panelTurmas = document.querySelector(".turmas")

    panelTurmas.innerHTML = ""
    getTurmas().then(turmas => {
        turmas.forEach(turma => {
            let div = document.createElement("div")
            div.classList.add('turma')
            div.innerHTML = `<h2>${turma.nome}</h2>`;

            let alunos = turma.obterAlunosMatriculados().map(aluno => {
                            return `<div>${aluno}</div>`;
                        }).join('')

            div.innerHTML += alunos;
            panelTurmas.appendChild(div)
        })
    })
}

atualizarTela()

let inputNome = document.querySelector('#nome');
const btnMatricular = document.querySelector('#matricular');

async function matricular(){
    let valorNome = inputNome.value;

    if(inputNome == '') {
        alert("Nome do aluno obrigatório")
    }

    let turmas = await getTurmas();

    for(let i = 0; i < turmas.length; i++) {
        if(turmas[i].obterAlunosMatriculados().length < 7){
            await turmas[i].MatricularAluno(inputNome);
            return atualizarTela();
        }
    }
    let novasTurmas = await CriarNovaTurma();

    await novasTurmas.MatricularAluno(inputNome);
    return atualizarTela();
}

btnMatricular.addEventListener('click', matricular);
