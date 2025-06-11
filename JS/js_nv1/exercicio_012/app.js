/* ----------------------------------------------------------------------------

Exercício: 012
Enunciado:
    Ao clicar no botão "Adicionar", se o input de texto não estiver vazio, adicionar
    um parágrafo com esse texto por baixo do botão.
---------------------------------------------------------------------------- */


document.querySelector('button').addEventListener('click', () => {
    let texto = document.querySelector('#text_post').value
    if (texto.trim() === ""){
        return
    }else{
        const novoP = document.createElement('p')
        novoP.textContent = texto

        document.querySelector('#posts').appendChild(novoP)
    }
})
