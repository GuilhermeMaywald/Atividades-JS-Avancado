import { ProcessarArquivos } from "./utils.js";

const btnProcessar = document.querySelector("#processar");
const totalArquivosEnviados = document.querySelector("#totalArquivos");
const totalArquivosSucesso = document.querySelector("#totalArquivosSucesso");
const totalArquivosErros = document.querySelector("#totalArquivosErros");

const files = [];
for (let i = 1; i <= 100; i++) {
  files.push({ text: `Arquivo ${i}`, id: i, file: `arquivo_${i}.txt` });
}

files.forEach((x) => {
  let op = document.createElement("option");
  op.value = x.file;
  op.innerText = x.text;
  document.querySelector("#arquivos").appendChild(op);
});

const processar = () => {
  const nodeListaOpcoesChecked = document.querySelectorAll("option:checked");
  const arquivos = Array.from(nodeListaOpcoesChecked).map((res) => res.value);

  const retornoProcessarArquivos = ProcessarArquivos(arquivos);

  Promise.allSettled(retornoProcessarArquivos).then((resultado) => {
    let arquivosRejeitados = resultado.filter(
      (item) => item.status == "rejected"
    ).length;
    totalArquivosEnviados.innerHTML = resultado.length;
    totalArquivosSucesso.innerHTML = Math.abs(
      resultado.length - arquivosRejeitados
    );
    totalArquivosErros.innerHTML = arquivosRejeitados;
  });
};

btnProcessar.addEventListener("click", processar);