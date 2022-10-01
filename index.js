let operation = ""
const cuadro = document.getElementById('screen')
const key = document.querySelectorAll("#num")
let opInt = []
const eq = document.getElementById('equal')
const reset = document.getElementById('reset')
const del = document.getElementById('del')
reset.addEventListener('click',rst)
eq.addEventListener('click',equal)
del.addEventListener('click',dlt)
key.forEach(keys => {
    keys.addEventListener('click',addN)


function addN(){
    operation = operation + keys.textContent
    cuadro.innerHTML = operation
}

})
function equal(){
    cuadro.innerHTML= (eval(operation))
}
function rst(){
    operation = ''
    cuadro.innerHTML = operation
}

function dlt(){
    
    let operation2 = operation.slice(0,-1)
    operation  =  operation2
    operation2 = ""
    cuadro.innerHTML = operation
}

