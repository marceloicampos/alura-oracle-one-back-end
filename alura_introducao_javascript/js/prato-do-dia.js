prato = document.querySelector('#sexta')

console.log('Prato do Dia')
console.log('- ', prato.children[0].textContent)
console.log('- ', prato.children[1].textContent)
console.log('- ', prato.children[2].textContent)
console.log('- ', prato.children[3].textContent)

sexta = `
<p>Prato do Dia</p>
<p> - ${prato.children[0].textContent}</p>
<p> - ${prato.children[1].textContent}</p>
<p> - ${prato.children[2].textContent}</p>
<p> - ${prato.children[3].textContent}</p>
`
console.log(sexta)

var btnPratoSexta = document.querySelector('#btn-prato-sexta')
var divPratoSexta = document.querySelector('#div-prato-sexta')
var reload = document.querySelector('#reload')

btnPratoSexta.addEventListener('click', () => {
    divPratoSexta.innerHTML = sexta
})

reload.addEventListener('click', () => {
    document.location.reload(true)
})
