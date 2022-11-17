let inputCep = document.querySelector('#cep');

function buscaCep() {
    const request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        let divLoading = document.querySelector('#loading');
        let divMessage = document.querySelector('#message');
        let labelLogradouro = document.querySelector('#logradouro');
        let labelBairro = document.querySelector('#bairro');
        let labelUf = document.querySelector('#uf');

        if (request.readyState == 1) {
            divLoading.style.display = 'block';
            labelLogradouro.innerHTML = '';
            labelBairro.innerHTML = '';
            labelUf.innerHTML = '';
        }

        if (request.readyState == 4) {
            divLoading.style.display = 'none';
            if (request.status !== 200) {
                divMessage.style.display = 'block';
            } else {
                divMessage.style.display = 'none';

                let jsonData = request.response;
                let jsonObj = JSON.parse(jsonData);

                labelLogradouro.innerHTML = jsonObj.address;
                labelBairro.innerHTML = jsonObj.district;
                labelUf.innerHTML = jsonObj.state;
            }
        }
    };
    request.open(
        'GET',
        `https://cdn.apicep.com/file/apicep/${cepDigitado}.json`
    );
    request.send();
}

inputCep.addEventListener('blur', buscaCep);