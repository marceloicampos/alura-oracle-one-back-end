// var tit = document.querySelector('.titulo')
// console.log(tit)
// console.log(tit.textContent)
// tit.textContent = 'Marcelo'
// document.querySelector('h1').textContent = 'Nutricionista'
// var imc = p / a**2
// console.log(imc)

// podemos mudar o título da página com evento de click

var tit = document.querySelector('.titulo')

function mudaTit() {
    tit.textContent = 'by marceloicampos'
}

tit.addEventListener('click', mudaTit)

// >>> OU podemos usar um simples onclick passando uma function

// var tit = document.querySelector('.titulo')

// function mudaTit() {
//     tit.textContent = 'by marceloicampos'
// }

// tit.onclick = mudaTit

// >>> OU podemos usar funções anônimas

// var tit = document.querySelector('.titulo')

// tit.onclick = function () {
//     tit.textContent = 'Marcelo'
// }

// CALCULO DO IMC

var p = document.querySelectorAll('.paciente')
// querySelector retorna 1 seletor
// querySelectorAll retorna 1 Array ou 1 Lista de seletores
// console.log(p)

for (var i = 0; i < p.length; i++) {
    const paciente = p[i]
    // console.log(paciente)
    // onde a lista começa 0 ?
    // qual o tamanho da lista length ?
    // qual o valor de cada iteração incrementa +1 ?
    // console.log(i)
    // console.log(paciente[i])

    var tdPeso = paciente.querySelector('.info-peso')
    var peso = tdPeso.textContent
    // console.log(tdPeso)
    // console.log(peso)

    var tdAltura = paciente.querySelector('.info-altura')
    var altura = tdAltura.textContent
    // console.log(tdAltura)
    // console.log(altura)

    var pesoValido = validaPeso(peso)
    var alturaValida = validaAltura(altura)
    // console.log(pesoValido)
    // console.log(alturaValida)

    // if (peso <= 0 || peso >= 400) {
    //     // console.log('peso invalido')
    //     pesoValido = false
    // }

    // if (altura <= 0 || altura >= 3.0) {
    //     // console.log('altura invalida')
    //     alturaValida = false
    // }

    if (alturaValida && pesoValido) {
        var imc = calcImc(peso, altura)
        // console.log(imc)
        paciente.querySelector('.info-imc').textContent = imc
    } else if (!pesoValido && !alturaValida) {
        paciente.querySelector('.info-imc').textContent =
            'peso e/ou altura inválidos'
        paciente.style.backgroundColor = 'lightcoral'
    } else if (!pesoValido) {
        paciente.querySelector('.info-imc').textContent = 'peso invalido'
        paciente.classList.add('campo-invalido')
    } else if (!alturaValida) {
        paciente.querySelector('.info-imc').textContent = 'altura invalida'
        paciente.classList.add('campo-invalido')
    }
}

function validaPeso(peso) {
    if (peso >= 0 && peso <= 400) {
        return true
    } else {
        return false
    }
}

function validaAltura(altura) {
    if (altura >= 0 && altura <= 3.0) {
        return true
    } else {
        return false
    }
}

function calcImc(peso, altura) {
    var imc = 0
    var imc = peso / altura ** 2
    return imc.toFixed(2)
}
