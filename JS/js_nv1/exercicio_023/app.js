/* ----------------------------------------------------------------------------

Exercício: 023
Enunciado:
    Existem 4 checkboxes referentes a um conjunto de permissões de usuário.
    Cada checkbox pode ser checkada individualmente.
    Por baixo existem duas opções: todas e nenhuma.
    Ao clicar em todas, todas as checkboxes devem ser checkadas.
    Ao clicar em nenhuma, todas as checkboxes devem ser descheckadas.
---------------------------------------------------------------------------- */

let cBoxes = document.querySelectorAll('input[type="checkbox"]')

document.querySelector('#all').addEventListener('click', () => {
    cBoxes.forEach(box =>{
        box.checked = true
    })
})

document.querySelector('#none').addEventListener('click', () => {
    cBoxes.forEach(box =>{
        box.checked = false
    })
})