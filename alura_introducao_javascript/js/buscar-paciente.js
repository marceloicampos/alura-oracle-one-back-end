var button = document.querySelector('#buscar-pacientes')

button.addEventListener('click', function () {
    // console.log('clicado')
    var xhr = new XMLHttpRequest()

    xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes')

    xhr.addEventListener('load', function () {
        // console.log(xhr.responseText)
        var erroAjax = document.querySelector('#erro-ajax')
        if (xhr.status == 200) {
            console.log(xhr.status)
            erroAjax.classList.add('hidden')
            var resposta = xhr.responseText
            var pacientes = JSON.parse(resposta)
            // console.log('array de js ou um ' + typeof pacientes)
            // console.log(pacientes)

            pacientes.forEach(function (paciente) {
                addPacientesOnTable(paciente)
            })
        } else {
            erroAjax.classList.remove('hidden')
            console.log(xhr.status)
        }
    })
    xhr.send()
})

// https://api-pacientes.herokuapp.com/pacientes
