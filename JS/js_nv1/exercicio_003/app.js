/* ----------------------------------------------------------------------------

Exercício: 003
Enunciado: CONTADOR COM CORES PARA NEGATIVOS, ZERO E POSITIVOS
    
    A partir do HTML existente, apresentar um valor inicial igual a 0 e definir
    funcionalidades nos botões de decremento e incremento.
    No caso do valor ser zero o texto deve ser branco.
    No caso do valor ser negativo o texto deve ser vermelho puro.
    No caso do valor ser positivo o texto deve ser verde puro.

---------------------------------------------------------------------------- */

let valor = 0
const contador = document.querySelector('#valor')

document.querySelector('#btn_decremento').addEventListener('click', () => {
    --valor
    cor_numero()
})

document.querySelector('#btn_incremento').addEventListener('click', () => {
    ++valor
    cor_numero()
})

function cor_numero(){
    contador.textContent = valor

   /*if(valor < 0) document.querySelector('#valor').style.color = 'red'
    else if (valor > 0) document.querySelector('#valor').style.color = 'green'
    else document.querySelector('#valor').style.color = 'white'*/

    let color = valor == 0 ? 'white' : valor < 0 ? 'red' : 'green'
    contador.style.color = color
}