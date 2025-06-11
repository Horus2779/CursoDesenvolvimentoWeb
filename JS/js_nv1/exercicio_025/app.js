/* ----------------------------------------------------------------------------

Exercício: 025
Enunciado:
    O input number text_numero é o multiplicando. O seu valor só pode variar
    entre 1 e 20. Ao alterar o valor, deve ser apresentada a tabuada do número definido
    no div cujo id = resultados.
---------------------------------------------------------------------------- */

let num = 1
let numInput = document.querySelector('#text_numero')

numInput.setAttribute('min', 1)
numInput.setAttribute('max', 20)

numInput.addEventListener('change', e => {

    
    document.querySelector('#resultados').innerHTML = ''
    for(num; num <= 10; num++){
      let p = document.createElement('p')
      let result = num * numInput.value
      p.innerText = num + ' X ' + numInput.value + " = " + result
      document.querySelector('#resultados').appendChild(p) 
    }
    num = 1
})
