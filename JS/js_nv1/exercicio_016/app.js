/* ----------------------------------------------------------------------------

Exercício: 016
Enunciado:
    Ao clicar em "Adicionar", se o input tiver texto, adicionar o mesmo num
    parágrafo por baixo do botão. 
    Não importa a ordem das palavras e frases.
    Quando clicar em "Limpar", todas as palavras e frases devem desaparecer
    e o input deve ficar limpo e receber o focus.

    NOTA: O HTML não pode ser alterado.
---------------------------------------------------------------------------- */

document.querySelector('button.btn:nth-of-type(2)').addEventListener('click', () => {
    let textoInput = document.querySelector('#text_post')
    if (textoInput.value.trim() === "" ){
        return
    }else{
        const novoP = document.createElement('p')
        novoP.textContent = textoInput.value    
        document.querySelector('#posts').appendChild(novoP)
        textoInput.value = ''
        textoInput.focus()
        console.log(document.querySelector('#posts').innerHTML)
    }
})

document.querySelector('button.btn:nth-of-type(1)').addEventListener('click', () => {
    let textoInput = document.querySelector('#text_post')
    textoInput.value = ''
    textoInput.focus()
    document.querySelector('#posts').innerHTML = ''
})


//Solução sugerida

let input = document.querySelector('#text_post')

document.querySelector(".mt-3.text-center").lastElementChild.addEventListener('click', () => {
    if(input.value !== ''){
        let p = document.createElement('p')
        p.textContent = input.value
        document.querySelector('#posts').appendChild(p)
        input.value = ''
        input.focus()
    }
} )

document.querySelector(".mt-3.text-center").firstElementChild.addEventListener('click', () => {
    document.querySelector('#posts').innerHTML = ''
})