console.log('módulo JoaoEMaria');

let joao = 1;
let maria = 2;

function getMaria(){
    return maria;
}

function getJoao(){
    return joao;
}

function setJoao(novoValor){
    joao = novoValor;
}

function setMaria(novoValor){
    maria = novoValor;
}


export {getJoao, getMaria, setJoao, setMaria}