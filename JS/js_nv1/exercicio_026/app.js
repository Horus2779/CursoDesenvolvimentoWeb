/* ----------------------------------------------------------------------------

Exercício: 026
Enunciado:
    Existem 4 inputs de texto, cada um com um id diferente.
    Cada input só pode receber um caracter.
    O focus deve iniciar no primeiro input.
    Ao digitar um algarismo, o focus deve ir para o próximo input.
    Ao digitar o último algarismo, o focus deve ir para o primeiro input.
    Se todos os inputs estiverem preenchidos, o sistema deve verificar se o
    número constituído pela concatenacao dos 4 algarismos é igual a 1234.
    Se for igual, deve aparecer uma mensagem de sucesso, caso contrário,
    a mensagem de sucesso deve estar escondida.
---------------------------------------------------------------------------- */

let inputs = document.querySelectorAll('[id^="t"]')
let certo = document.querySelector('.text-success')
let num = 0

inputs[0].focus()
certo.setAttribute('hidden', true)

inputs.forEach(input => {
    input.addEventListener('input', () => {
        if(num === 3){
            inputs[0].focus()
            num = 0
        }else if(inputs[num] !== ''){
            inputs[num+1].focus()
            num += 1
        }

        if(input.value.length > 1){
            input.value = input.value.charAt(0)
        }
        
        if([...inputs].every(input => input.value !== '')){
            const result = [...inputs].map(i => i.value).join('');
            console.log(result)
            result === "1234" ? certo.removeAttribute('hidden') : certo.setAttribute('hidden', true)
        }
    })
})