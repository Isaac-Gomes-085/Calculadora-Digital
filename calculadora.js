let res = document.getElementById('resultado')

function insert(num) {
    let numero = res.innerHTML
    res.innerHTML = numero + num
}
function clean() {
    res.innerHTML = ''
}

function apagar() {
    let resultado = res.innerHTML
    res.innerHTML = resultado.substring(0, resultado.length -1)
}
function calcular(){
    let resultado = res.innerHTML

    if(resultado){
        res.innerHTML = eval(resultado)
    }
    else{
        res.innerHTML='0'
    }
}