let operation = ""
const cuadro = document.getElementById('ope')
const key = document.querySelectorAll("#num")
const eq = document.getElementById('equal')
const reset = document.getElementById('reset')
const del = document.getElementById('del')
const fonts = [document.getElementById('selector') , document.getElementById('thnumb'), document.getElementById('ope')]
const bgpad  = [document.getElementById('keys'), document.getElementById('chooseTheme')]
const bgscrn = document.getElementById('screen')

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

let range = document.getElementById('chooseTheme')
function change(){ 
    if(range.value==0){
        document.body.style.backgroundColor = "hsl(222, 26%, 31%)";
        bgscrn.style.backgroundColor = 'hsl(224, 36%, 15%)'
     
        fonts.forEach((a,index  )=> {
            fonts[index].style.color = 'white'
        })
        bgpad.forEach((a,index  )=> {
            bgpad[index].style.backgroundColor = 'hsl(223, 31%, 20%)'
        })

    }
    
if(range.value==1){
    document.body.style.backgroundColor = "hsl(0, 0%, 90%)";
    bgscrn.style.backgroundColor = 'hsl(0, 0%, 93%)'

    fonts.forEach((a,index  )=> {
        fonts[index].style.color = 'hsl(60, 10%, 19%)'
    })
    bgpad.forEach((a,index  )=> {
        bgpad[index].style.backgroundColor = 'hsl(0, 5%, 81%)'
    })
}
if(range.value==2){
    document.body.style.backgroundColor = "hsl(268, 75%, 9%)";
    bgscrn.style.backgroundColor = 'hsl(268, 71%, 12%)'

    fonts.forEach((a,index  )=> {
        fonts[index].style.color = 'hsl(52, 100%, 62%)'
    })
    bgpad.forEach((a,index  )=> {
        bgpad[index].style.backgroundColor = 'hsl(268, 71%, 12%)'
    })
}
}

