/* ----------------------------------------------------------------------------

Exercício: 008
Enunciado:
    Existem 5 botões, cada um com uma cor diferente do Bootstrap.
    A ideia é criar o código javascript que permita que o clique em cada
    um dos botões altere o texto acima para a cor de fundo do botão.
---------------------------------------------------------------------------- */

const texto = document.querySelector('h3')

document.querySelectorAll('button').forEach((btn) => {
    btn.addEventListener('click', (el) => {
        texto.style.color = getComputedStyle(btn).backgroundColor
    })
})

//Solução proposta
const cores = ['primary', 'info', 'sucess', 'danger', 'warning']
document.querySelectorAll('[id="btn"]').forEach((btn) => {
    btn.addEventListener('click', (btn) => {
        let index = btn.target.id.substring(3,4) - 1
        document.querySelector('h3').className = 'text-' + cores[index]
    })
})
