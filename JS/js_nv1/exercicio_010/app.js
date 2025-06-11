/* ----------------------------------------------------------------------------

Exercício: 010
Enunciado:
    Existem 4 áreas a cinza.
    Ao clicar numa das áreas a área clicada deve ficar com fundo
    amarelo e as restantes a vermelho.
---------------------------------------------------------------------------- */


document.querySelectorAll('.box').forEach((box) => {
    box.addEventListener('click', (e) =>{
        for(let n = 1; n<=4; n++){
            e.target.id == 'box' + n ? box.style.backgroundColor = 'yellow' : document.querySelector('#box' + n).style.backgroundColor = 'red'
        }
    })
})

//solução Sugerida
const boxes = document.querySelectorAll('[id^="box"]');
boxes.forEach((box) => {
    box.addEventListener('click', (box) => {
        all_red()
        box.target.style.backgroundColor = 'yellow'
    })
})

function all_red(){
    boxes.forEach(box => {
        box.style.backgroundColor = 'red'
    })
}