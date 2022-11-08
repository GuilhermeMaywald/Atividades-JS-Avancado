/*
Estamos trabalhando em um sistema o qual o menu possui muito níveis, com vários submenus um dentro do outro. Pensando em facilitar a vida dos usuários foi solicitado criar um buscador para exibir o caminho completo até menu desejado. 

Crie uma função recursiva que retorne o caminho completo do menu desejado, buscando o mesmo na estrutura de dados abaixo. A função deverá fazer a busca com base no nome do menu.
a. A função receberá por parâmetro um array de menus e o nome do item a ser buscado.
b. Caso a função encontre o Menu que foi passado ela deve retornar o caminho completo de como se chegar ao Menu desejado.
c. Caso a função não encontre o Menu desejado a mesma deve retornar null.

Ex.: Para exemplificar a função recursiva que será criada, abaixo 3 exemplos com os resultados esperados a cada execução:
 o funcaoRecursiva(“Menu 1”, itens);
    ▪ “Menu 1”
 o funcaoRecursiva(“Menu 2.1.1.1.2”, itens);
    ▪ “Menu 2 > Menu 2.1 > Menu 2.1.1 > Menu 2.1.1.1 > Menu 2.1.1.1.2”
 o funcaoRecursiva(“Menu 3.1”, itens);
    ▪ null – “Pois não existe Menu 3.1 nos itens do menu.”   
*/

const itens = [
    {
        nome: 'Menu 1',
        itens: [
            {
                nome:'Menu 1.1',
                itens:[]
            },
            {nome: 'Menu 1.2', itens:[]},
            {nome: 'Menu 1.3', itens: [{nome: 'Menu 1.3.1', itens:[]}]},
        ]
    },
    {
        nome: 'Menu 2',
        itens:[
            {
                nome: 'Menu 2.1',
                itens:[{
                    nome: 'Menu 2.1.1',
                    itens: [
                        {
                            nome: 'Menu 2.1.1.1',
                            itens: [
                                {nome: 'Menu 2.1.1.1.1', itens: []},
                                {nome: 'Menu 2.1.1.1.2', itens: []},
                            ]
                        }
                    ]
                },
                {nome:'Menu 2.1.2', itens:[]},
            ]
            },
            {nome:'Menu 2.2', itens: [{nome: 'Menu 2.2.1', itens:[]}]},
        ]
    }
]

function funcaoRecursiva(name, itensMenu){
    for(let i = 0; i < itensMenu.length; i++){
        if(name === itensMenu[i].nome){
            return console.log(name);
            
        }else if(itensMenu[i].itens.length > 0 ){
            let chamadaFuncao =  funcaoRecursiva(name, itensMenu[i].itens)
            if(chamadaFuncao != undefined){
                return console.log(`${itensMenu[i].nome} > ${chamadaFuncao}`);
            }
        }
    }
}

funcaoRecursiva('Menu 1', itens);
funcaoRecursiva('Menu 2.1.1.1.2', itens);
// funcaoRecursiva('Menu 3.1', itens);





// function funcaoRecursiva(name, itensMenu){ 
//     for(i = 0; i < itensMenu.length; i++){ 
//         if(name === itensMenu[i].nome){
//             return name;
//         } else if (itensMenu[i].itens.length > 0 ){
//             return `${itensMenu[i].nome} > ${funcaoRecursiva(name, itensMenu[i].itens)}`;
//         } else if (itens[i].itens.length > 0 ){
//             return `${itens[i].nome} > ${funcaoRecursiva(name, itens[i].itens)}`;
//         } else {
//             i++;
//             if(name === itens[i].nome){
//             funcaoRecursiva(name, itensMenu)
//             return name;
//         }
        
//     }
// }}
// console.log(funcaoRecursiva('Menu 1', itens));


// function buscarItem(arrItens, nomeMenu, index = 0) {
//     const buscarItens = arrItens.nome;

//     if(buscarItens === index){
//         return null;
//     } else if(arrItens=== nomeMenu){
//         return buscarItens.nome;
//     } else {
//         index++;
//         return buscarItem(arrItens, nomeMenu, index);
//     }

// }
// console.log(buscarItem(itens, 'Menu 1'));