var tabela = document.querySelector('table')

tabela.addEventListener('dblclick', function (event) {
    event.target.parentNode.classList.add('fadeOut')
    setTimeout(function () {
        event.target.parentNode.remove()
    }, 500)
    // console.log('clicado')
    // console.log(event.target)
})

// var pacientes = document.querySelectorAll('.paciente')
// pacientes.forEach(paciente => {
//     paciente.addEventListener('dblclick', function (event) {
//         console.log('clicado')
//         this.remove()
//     })
// })

// var tabela = document.querySelector('#tabela-pacientes')
// tabela.addEventListener('click', (event) => {
//     console.log('clicado')
// })

// var tabela = document.querySelector('body')
// tabela.addEventListener('click', event => {
//     console.log('clicado')
// })
