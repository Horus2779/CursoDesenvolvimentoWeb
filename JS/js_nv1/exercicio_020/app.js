/* ----------------------------------------------------------------------------

Exercício: 020
Enunciado:
    Existem 4 inputs na página.
    Sempre que o focus de um input for alterado, a cor de fundo do input
    deve ficar amarela, indicando que o input está ativo. 
    Os inativos devem ficar a branco.
---------------------------------------------------------------------------- */

const inputText = document.querySelectorAll('input[type="text"]')

inputText.forEach(text => {
    text.addEventListener('focus', e => {
        all_white()
        e.target.style.backgroundColor = 'yellow'
    })
})

function all_white(){
    inputText.forEach(text => text.style.backgroundColor = 'white')
}

//Solução sugerida
document.querySelectorAll('[name^="text_"]').forEach(e => {
    e.addEventListener('focus', () => {
        e.style.backgroundColor = 'yellow'
    })
    e.addEventListener('blur', () => {
        e.style.backgroundColor = 'white'
    })
})
