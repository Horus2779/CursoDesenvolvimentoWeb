/* ----------------------------------------------------------------------------

Exercício: 006
Enunciado:
    Existem 3 botões no layout. Cada botão está associado a uma área de
    informação. O objetivo é criar a lógica que permite apresentar cada
    uma das áreas de acordo com o botão clicado.
    A área de informação um deve estar visível por padrão.

    NOTA: quando uma área é apresentada, as outras devem ficar escondidas
---------------------------------------------------------------------------- */

const info1 = document.querySelector('#info1')
const info2 = document.querySelector('#info2')
const info3 = document.querySelector('#info3')

info2.style.display = 'none'
info3.style.display = 'none'

document.querySelector('#tab1').addEventListener('click', () =>{
    info1.style.display = ''
    info2.style.display = 'none'
    info3.style.display = 'none'
})

document.querySelector('#tab2').addEventListener('click', () =>{
    info1.style.display = 'none'
    info2.style.display = ''
    info3.style.display = 'none'
})

document.querySelector('#tab3').addEventListener('click', () =>{
    info1.style.display = 'none'
    info2.style.display = 'none'
    info3.style.display = ''
})

//Solução proposta
function hide_all(){
    document.querySelectorAll('[id^="info"]').forEach((el) => { el.classList.add('d-none') /*classe no bootstrap*/})
}

function show_tab(id){
    document.querySelector('#info' + id).classList.remove('d-none')
}

document.querySelectorAll('[id^="tab"]').forEach((btn) => {
    btn.addEventListener('click', (btn) => {
        hide_all();
        show_tab(btn.target.id.substring(3))
    })
})

hide_all()
show_tab(1)