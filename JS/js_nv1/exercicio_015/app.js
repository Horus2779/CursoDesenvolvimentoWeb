/* ----------------------------------------------------------------------------

Exercício: 015
Enunciado:
    Ao clicar em "Adicionar", se o input tiver texto, adicionar o mesmo num
    parágrafo por baixo do botão.

    As palavras e frases mais recentes devem ficar no topo.
---------------------------------------------------------------------------- */

document.querySelector('button').addEventListener('click', () => {
    let textoInput = document.querySelector('#text_post')
    if (textoInput.value.trim() === "" ){
        return
    }else{
        const novoP = document.createElement('p')
        novoP.textContent = textoInput.value
        document.querySelector('#posts').prepend(novoP)
        textoInput.value = ''
        textoInput.focus()
    }
})