var buttonAdd = document.querySelector('#adicionar-paciente')

buttonAdd.addEventListener('click', function (event) {
    event.preventDefault()
    // o event.preventDefault() previne execução padrão dos eventos nesse caso ele previne o re carregamento da página pelo evento de clicar que pelo padrão do html re carrega a página após enviar um form
    // console.log('botão clicado')
    var form = document.querySelector('#form-adiciona')

    var paciente = infoForm(form)
    // console.log(paciente)

    var erros = validaPaciente(paciente)
    // console.log(erros)

    if (erros.length > 0) {
        // console.log('paciente invalido')
        exibeMensagensDeErro(erros)
        return
    } else {
        // console.log('paciente valido')
        var menError = document.querySelector('#mensagens-erro')
        menError.innerHTML = ''
    }

    addPacientesOnTable(paciente)

    form.reset()
    // a função reset limpas os campos ou podemos fazer de forma extensa passando value vazio como abaixo
    // document.querySelector('#nome').value = ''
    // document.querySelector('#peso').value = ''
    // document.querySelector('#altura').value = ''
    // document.querySelector('#gordura').value = ''
})

function infoForm(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcImc(form.peso.value, form.altura.value)
    }

    return paciente
    // var nome = form.nome.value
    // var peso = form.peso.value
    // var altura = form.altura.value
    // var gordura = form.gordura.value
    // console.log(nome)
    // console.log(peso)
    // console.log(altura)
    // console.log(gordura)
}

function montaTr(paciente) {
    var pacienteTr = document.createElement('tr')
    pacienteTr.classList.add('paciente')
    // console.log(pacienteTr)

    pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'))
    pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'))
    pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'))
    pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'))
    pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'))

    return pacienteTr
}

function montaTd(dado, classe) {
    var td = document.createElement('td')
    td.textContent = dado
    td.classList.add(classe)
    return td
}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector('#mensagens-erro')
    ul.innerHTML = ''

    erros.forEach(erro => {
        var li = document.createElement('li')
        li.textContent = erro
        ul.appendChild(li)
    })
}

function validaPaciente(paciente) {
    var erros = []

    if (paciente.nome.length == 0) {
        erros.push('O nome está em branco !')
    }
    if (paciente.peso.length == 0) {
        erros.push('O peso está em branco !')
    }
    if (paciente.altura.length == 0) {
        erros.push('A altura está em branco !')
    }
    if (paciente.gordura.length == 0) {
        erros.push('A gordura está em branco !')
    }
    if (!validaPeso(paciente.peso) && !validaAltura(paciente.altura)) {
        erros.push('Peso e Altura Digitados são Inválidos!')
    } else if (!validaPeso(paciente.peso)) {
        erros.push('Peso Digitado é Inválido!')
    } else if (!validaAltura(paciente.altura)) {
        erros.push('Altura Digitada é Inválida!')
    }

    return erros
}

function addPacientesOnTable(paciente) {
    var pacienteTr = montaTr(paciente)
    var tabela = document.querySelector('#tabela-pacientes')
    tabela.appendChild(pacienteTr)
}
