var campoFiltro = document.querySelector('#filtra-tabela')
// console.log(campoFiltro)

campoFiltro.addEventListener('input', function () {
    console.log(this.value)
    // console.log(campoFiltro.value)
    var pacientes = document.querySelectorAll('.paciente')

    if (this.value.length > 0) {
        for (let i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i]
            var tdNome = paciente.querySelector('.info-nome')
            var nome = tdNome.textContent
            var reg = new RegExp(this.value, 'i')

            if (!reg.test(nome)) {
                paciente.classList.add('hidden')
            } else {
                paciente.classList.remove('hidden')
            }
        }
    } else {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i]
            paciente.classList.remove('hidden')
        }
    }
})
