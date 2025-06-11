/* ----------------------------------------------------------------------------

Exercício: 005
Enunciado: TRÊS SLIDERS COM VALORES INDEPENDENTES - VERSÃO CÓDIGO REDUZIDO
    
    O exercício anterior, mas com quantidade de código JS reduzida.

---------------------------------------------------------------------------- */

document.querySelectorAll('input[type="range"]').forEach((range) => {
    range.setAttribute('min', 0)
    range.setAttribute('max', 100)
    range.value = 0
    range.addEventListener('input', (e) => {
        let id_range = e.target.id
        if(id_range == 'range_1') document.querySelector('#value_1').textContent = range.value
        else if(id_range == 'range_2') document.querySelector('#value_2').textContent = range.value
        else document.querySelector('#value_3').textContent = range.value
    })
})


//Solução proposta
/*for (let r = 1; r <= 3; r++) {
    let el =  document.querySelector('#range_' + r)
    el.setAttribute('min', 0)
    el.setAttribute('max', 100)
    el.value = 0
    el.addEventListener('input', (e) => {
        document.querySelector('#value_' + r).textContent = e.target.value
    })
}*/