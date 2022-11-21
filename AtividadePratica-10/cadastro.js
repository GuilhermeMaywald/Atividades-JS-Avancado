
const btnCadastrar = document.querySelector('#cadastrar');
const inputNome = document.querySelector('#nome');
const inputMatricula = document.querySelector('#matricula');
const divLoadingCadastro = document.querySelector('#loading-cadastro');

btnCadastrar.addEventListener('click', cadastrarAluno);

function cadastrarAluno() {
    const nomeAluno = inputNome.value;
    const numeroMatricula = inputMatricula.value;

    if (!nomeAluno || !numeroMatricula) {
        alert('Dados incorretos');
        return;
    }

    divLoadingCadastro.innerHTML = "Carregando...";

    const aluno = {
        nome: nomeAluno,
        matricula: numeroMatricula
    };
    const initRequest = {
        method: 'POST',
        body: JSON.stringify(aluno)
    };

    const url = 'http://localhost:3000';

    fetch(`${url}/aluno`, initRequest)
        .then(response => {
            if (response.ok) {
                alert('Aluno cadastrado com sucesso');
                inputNome.value = '';
                inputMatricula.value = '';
                divLoadingCadastro.innerHTML = '';
                return;
            }
            throw new Error('Matricula ja cadastrada');
        })
        .catch(erro => {
            alert(erro.message);
        });
}