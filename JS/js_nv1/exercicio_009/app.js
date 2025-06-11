/* ----------------------------------------------------------------------------

Exercício: 009
Enunciado:
    Exercício simples: O texto é branco e o elemento range vai servir para
    alterar a transparência do texto. Do valor mais opaco à esquerda, até
    à transparência total à direita.

    NOTA: Deves definir os valores do range.
---------------------------------------------------------------------------- */

const texto = document.querySelector('h3')
const range = document.querySelector('#range')

range.setAttribute('min', 0.0)
range.setAttribute('max', 1.0)
range.setAttribute('step', 0.01)
range.value = 0.0

range.addEventListener('input', (e) => {
    texto.style.opacity = 1 - range.value
})
