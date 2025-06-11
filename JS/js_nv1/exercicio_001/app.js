/* ----------------------------------------------------------------------------

Exercício: 001
Enunciado: CONTADOR
    
    A partir do HTML existente, apresentar um valor inicial igual a 0 e definir
    funcionalidades nos botões de decremento e incremento. Ao clicar em cada
    um dos botões, o utilizador irá aumentar ou diminuir o valor em uma unidade.

---------------------------------------------------------------------------- */

let valor = 0

const contador = document.querySelector('#valor')

document.querySelector('#btn_decremento').addEventListener('click', () => {
    contador.innerText = --valor
})

document.querySelector('#btn_incremento').addEventListener('click', () => {
    contador.innerText = ++valor
})

/*document.querySelectorAll('button').forEach((button) =>{
    button.addEventListener('click', (e) => {
        let id = e.target.id
        console.log(id)
        if (id === 'btn_decremento'){
            let valor = parseInt(contador.innerText)
            valor -= 1
            contador.innerText = valor
        } else {
           let valor = parseInt(contador.innerText)
            valor += 1
            contador.innerText = valor 
        }
    })
})*/