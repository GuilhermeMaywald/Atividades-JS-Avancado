function montarTabuada(mult){   

    function efetuaTabuada(init,  end){
        for(init = 1; init <= end; init++ ){
            console.log(`${init} X ${mult} = ${init * mult}`);
        }
    }
    return efetuaTabuada;
}


const tabuada2 = montarTabuada(2);

console.log(tabuada2(1, 10));