/* ----------------------------------------------------------------------------

Exercício: 014
Enunciado:
    Ao clicar no botão "Adicionar", se o input de texto não estiver vazio, adicionar
    um parágrafo com esse texto por baixo do botão. 
    Depois da inserção com sucesso, o input deve ser limpo e receber o focus para
    nova inserção.
    Não são permitidas as palavras "teste", "obrigado" e "hoje"
---------------------------------------------------------------------------- */

let nword = ['teste', 'obrigado', 'hoje']

document.querySelector('button').addEventListener('click', () => {
    let textoInput = document.querySelector('#text_post')
    if (textoInput.value.trim() === "" || nword.includes(textoInput.value.toLowerCase())){
        return
    }else{
        const novoP = document.createElement('p')
        novoP.textContent = textoInput.value
        document.querySelector('#posts').appendChild(novoP)
        textoInput.value = ''
        textoInput.focus()
    }
})