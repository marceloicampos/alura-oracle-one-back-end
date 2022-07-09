var professores = document.querySelector('#professores')

let nomes = ''

const nomesProfessores = ['Douglas', 'Flávio', 'Nico', 'Rômulo', 'Leonardo']
console.log(nomesProfessores)

nomesProfessores.forEach(item => {
    nomes += '<p>' + item + ': é instrutor da Alura' + '</p>'
    professores.innerHTML = nomes
})

// let text = ''
// const fruits = ['apple', 'orange', 'cherry']
// fruits.forEach((item, index) => {
//     text += index + ': ' + item + '<br>'
//     console.log(text)
// })

let text = ''
const fruits = ['apple', 'orange', 'cherry']
fruits.forEach(myFunction)

function myFunction(item, index) {
    text += index + ': ' + item + '<br>'
    console.log(text)
}
