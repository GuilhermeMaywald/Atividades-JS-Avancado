const btnSave = document.querySelector("#Salvar");
let divMsg = document.querySelector(".message");

function validar(idsASerValidado) {
  return new Promise((resolve, reject) => {
    let idsSucesso = [];
    let idsRejeitados = [];
    for (let i = 0; i < idsASerValidado.length; i++) {
      let input = document.querySelector(`#${idsASerValidado[i]}`);

      if (input.value !== "") {
        idsSucesso.push(idsASerValidado[i]);
      } else {
        idsRejeitados.push(idsASerValidado[i]);
      }
    }

    if (idsRejeitados.length !== 0) {
      reject(idsRejeitados);
    } else {
      resolve();
    }
  });
}

btnSave.addEventListener("click", () =>
  validar(["nome", "idade", "endereco", "telefone"])
    .then(() => {
      alert("Dados salvos com sucesso");
    })
    .catch((err) => {
      let msg = err.map((item) => {
        return `<p>Campo ${item} é obrigatório</p>`;
      });
      divMsg.innerHTML = msg.join("");
    })
);