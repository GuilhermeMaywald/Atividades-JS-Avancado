import { EnviarMensagemServers } from "./utils.js";

const btnEnviar = document.querySelector("#enviar");
const divResposta = document.querySelector("#primeiraResposta");

const enviarParaServidor = () => {
  const input = document.querySelector("#mensagem");
  let retornoFuncao = EnviarMensagemServers(input.value);

  Promise.race(retornoFuncao)
    .then((res) => {
      divResposta.innerHTML = res;
      divResposta.style.color = "green";
    })
    .catch((err) => {
      divResposta.innerHTML = err;
      divResposta.style.color = "red";
    });
};

btnEnviar.addEventListener("click", enviarParaServidor);