let operation = ""
const cuadro = document.getElementById('ope')
const key = document.querySelectorAll("#num")
const eq = document.getElementById('equal')
const reset = document.getElementById('reset')
const del = document.getElementById('del')
const fonts = [document.getElementById('selector'), document.getElementById('thnumb'), document.getElementById('ope')]
const bgpad = [document.getElementById('keys'), document.getElementById('chooseTheme')]
const bgscrn = document.getElementById('screen')
const deres = [document.getElementById('del'), document.getElementById('reset')]

reset.addEventListener('click', rst)
eq.addEventListener('click', equal)
del.addEventListener('click', dlt)
key.forEach(keys => {
    keys.addEventListener('click', addN)


    function addN() {
        operation = operation + keys.textContent
        cuadro.innerHTML = operation
    }

})
function equal() {
    
    cuadro.innerHTML = (eval(operation.replace('x','*')))
}
function rst() {
    operation = ''
    cuadro.innerHTML = operation
}

function dlt() {
    let operation2 = operation.slice(0, -1)
    operation = operation2
    operation2 = ""
    cuadro.innerHTML = operation
}

let range = document.getElementById('chooseTheme')
function change() {
    if (range.value == 0) {
        //Background
        document.body.style.backgroundColor = "hsl(222, 26%, 31%)";
        //Screen
        bgscrn.style.backgroundColor = 'hsl(224, 36%, 15%)'
        //Equal
        eq.style.backgroundColor = 'hsl(6, 63%, 50%)'
        eq.style.color = 'white'
        eq.style.boxShadow = '0 0.25rem 0rem 0rem hsl(6, 70%, 34%)'
        eq.onmouseover = function () {
            this.style.backgroundColor = "#f96c5b";
        }
        eq.onmouseleave = function () {
            this.style.backgroundColor = "hsl(6, 63%, 50%)";
        }
        //Fonts
        fonts.forEach((a, index) => {
            fonts[index].style.color = 'white'
        })
        //Pad
        bgpad.forEach((a, index) => {
            bgpad[index].style.backgroundColor = 'hsl(223, 31%, 20%)'
        })
        //Number keys
        key.forEach(keys => {
            keys.style.color = 'hsl(221, 14%, 31%)'
            keys.style.backgroundColor = 'hsl(30, 25%, 89%)'
            keys.style.boxShadow = '0 0.25rem 0rem 0rem hsl(28, 16%, 65%)'
            keys.onmouseover = function () {
                this.style.backgroundColor = "hsl(0, 0%, 100%)";
            }
            keys.onmouseleave = function () {
                this.style.backgroundColor = "hsl(30, 25%, 89%)";
            }
        })
        //Delete and Reset
        deres.forEach((a, index) => {
            deres[index].style.backgroundColor = 'hsl(225, 21%, 49%)'
            deres[index].style.boxShadow = '0 0.25rem 0rem 0rem hsl(224, 28%, 35%)'
            //Hover
            deres[index].onmouseover = function () {
                this.style.backgroundColor = "#a2b3e1";
            }
            deres[index].onmouseleave = function () {
                this.style.backgroundColor = "hsl(225, 21%, 49%)";
            }
        })
    }

    if (range.value == 1) {
        //Background
        document.body.style.backgroundColor = "hsl(0, 0%, 90%)";
        //Screen
        bgscrn.style.backgroundColor = 'hsl(0, 0%, 93%)'
        //Equal
        eq.style.backgroundColor = 'hsl(25, 98%, 40%)'
        eq.style.color = 'white'
        eq.style.boxShadow = '0 0.25rem 0rem 0rem hsl(25, 99%, 27%)'
        //Hover
        eq.onmouseover = function () {
            this.style.backgroundColor = "#ff8b38";
        }
        eq.onmouseleave = function () {
            this.style.backgroundColor = "hsl(25, 98%, 40%)";
        }
        //Fonts
        fonts.forEach((a, index) => {
            fonts[index].style.color = 'hsl(60, 10%, 19%)'
        })
        //Pad
        bgpad.forEach((a, index) => {
            bgpad[index].style.backgroundColor = 'hsl(0, 5%, 81%)'
        })
        //Number keys
        key.forEach(keys => {
            keys.style.color = 'hsl(60, 10%, 19%)'
            keys.style.backgroundColor = 'hsl(45, 7%, 89%)'
            keys.style.boxShadow = '0 0.25rem 0rem 0rem hsl(35, 11%, 61%)'
            //Hover
            keys.onmouseover = function () {
                this.style.backgroundColor = "#ffffff";
            }
            keys.onmouseleave = function () {
                this.style.backgroundColor = "hsl(45, 7%, 89%)";
            }
        })
        //Delete and Reset
        deres.forEach((a, index) => {
            deres[index].style.backgroundColor = 'hsl(185, 42%, 37%)'
            deres[index].style.boxShadow = '0 0.25rem 0rem 0rem hsl(185, 58%, 25%)'
            //Hover
            deres[index].onmouseover = function () {
                this.style.backgroundColor = "#62b5bd";
            }
            deres[index].onmouseleave = function () {
                this.style.backgroundColor = "hsl(185, 42%, 37%)";
            }
        })
    }
    if (range.value == 2) {
        //Background
        document.body.style.backgroundColor = "hsl(268, 75%, 9%)";
        //Screen
        bgscrn.style.backgroundColor = 'hsl(268, 71%, 12%)'
        //Equal
        eq.style.backgroundColor = 'hsl(176, 100%, 44%)'
        eq.style.color = 'hsl(198, 20%, 13%)'
        eq.style.boxShadow = '0 0.25rem 0rem 0rem hsl(177, 92%, 70%)'
        //Hover
        eq.onmouseover = function () {
            this.style.backgroundColor = "#94fff9";
        }
        eq.onmouseleave = function () {
            this.style.backgroundColor = "hsl(176, 100%, 44%)";
        }
        //Fonts
        fonts.forEach((a, index) => {
            fonts[index].style.color = 'hsl(52, 100%, 62%)'
        })
        //Pad
        bgpad.forEach((a, index) => {
            bgpad[index].style.backgroundColor = 'hsl(268, 71%, 12%)'
        })
        //Keys
        key.forEach(keys => {
            keys.style.color = 'hsl(52, 100%, 62%)'
            keys.style.backgroundColor = 'hsl(268, 47%, 21%)'
            keys.style.boxShadow = '0 0.25rem 0rem 0rem hsl(290, 70%, 36%)'
            //Pad Hover
            keys.onmouseover = function () {
                this.style.backgroundColor = "#6b34ac";
            }
            keys.onmouseleave = function () {
                this.style.backgroundColor = "hsl(268, 47%, 21%)";
            }

        })
        //Delete and Reset
        deres.forEach((a, index) => {
            deres[index].style.backgroundColor = 'hsl(281, 89%, 26%)'
            deres[index].style.boxShadow = '0 0.25rem 0rem 0rem hsl(285, 91%, 52%)'
            //Hover
            deres[index].onmouseover = function () {
                this.style.backgroundColor = "#8631b0";
            }
            deres[index].onmouseleave = function () {
                this.style.backgroundColor = "hsl(281, 89%, 26%)";
            }

        })
    }
}

