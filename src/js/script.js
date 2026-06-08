const visor = document.querySelector('#visor')

visor = visor.value = 0

function adicionar(valor){
    if(visor.value == 0){
    visor.value = valor
    }else{
    visor.value += valor
    }
}

function calcular(){
    try{
    visor.value = eval(visor.value)
    }
    catch{
        visor.value = 'Erro'
    }
}

function limpar(){
    visor.value = 0
}