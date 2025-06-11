/* ----------------------------------------------------------------------------

Exercício: 021
Enunciado:
    Existem 4 inputs na página.
    1. Coloca o focus automaticamente no input acima e à esquerda.
    2. Sempre que pressionares a tecla Enter (return), o focus deverá
    passar para o input seguinte, mesmo que não tenhas escrito qualquer texto.
---------------------------------------------------------------------------- */

let index = [1,2,3,4]

document.querySelectorAll('input[type="text"]').forEach(inputText => {
    inputText.addEventListener('keydown', e => {
        if(e.key === 'Enter'){
            for(let c = 0; c < 4; c++){
                if(e.target.name === 'text_4'){
                    document.querySelector(`input[name="text_1"]`).focus()
                }else if(e.target.name === 'text_' + index[c]){
                    document.querySelector(`input[name="text_${index[c+1]}"]`).focus()
                }  
            }
        }
    })
})

//Solução Sugerida
let inputs = document.querySelectorAll('[name^="text_"]')
inputs[0].focus()
inputs.forEach(input => {
    input.addEventListener('keyup', e => {
        if(e.code == 'Enter'){
            let index = input.name.substring(5) - 1
            index ++
            if(index == 4) index = 0
            inputs[index].focus()
        }
    })
})