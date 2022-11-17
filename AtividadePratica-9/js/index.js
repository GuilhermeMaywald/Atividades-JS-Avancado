//GET 
//URL: http://apicep.com.br?cep=24111532&rua=Teste

//POST
//URL: http://apicep.com.br?cep=24111532&rua=Teste
//{ rua: "Endereco X" , cep: '24111532' }

// XML
// <pessoa>
//     <nome>Wesdras</nome>
//     <endereco>Rua teste</endereco>
// </pessoa>

// JSON
// [
//     pessoa: {
//         nome: "Wesdras"
//         endereco: "Rua teste"
//     }
// ]

setTimeout(() => {
    const request = new XMLHttpRequest()

    console.log("STATE INICIAL")
    console.log(request.readyState)

    request.onreadystatechange = function(){
        console.log("MUDANDO O STATE")
        console.log(request.readyState)

        if(request.readyState == 4){
            console.log(request.status)
            let jsonData = request.response
            let objData = JSON.parse(jsonData)
            const div = document.querySelector("#pokemons")

            objData.results.forEach(pokemon => {
                div.innerHTML += `<p>${pokemon.name}</p>`
            });
        }

    }
    
    request.open("GET","https://pokeapi.co/api/v2/pokemon")
    request.send()
},6000)


// let text = '{"pessoa": "Wesdras"}'
// let text2 = {"pessoa": "Wesdras"}

// console.log(JSON.parse(text).pessoa)