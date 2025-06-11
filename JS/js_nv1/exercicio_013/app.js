/* ----------------------------------------------------------------------------

Exercício: 013
Enunciado:
    Ao clicar no botão "Adicionar", se o input de texto não estiver vazio, adicionar
    um parágrafo com esse texto por baixo do botão. O texto deve apresentar uma numeração
    sequencial e depois de inserido, o input deve ser limpo e receber o focus para
    nova inserção.
---------------------------------------------------------------------------- */

let num = 1

document.querySelector('button').addEventListener('click', () => {
    let textoInput = document.querySelector('#text_post')
    if (textoInput.value.trim() === ""){
        return
    }else{
        const novoP = document.createElement('p')
        novoP.textContent = `${num++}. ${textoInput.value}`
        document.querySelector('#posts').appendChild(novoP)
        textoInput.value = ''
        textoInput.focus()
    }
})