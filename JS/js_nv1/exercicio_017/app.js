/* ----------------------------------------------------------------------------

Exercício: 017
Enunciado:
    Ao clicar em "Adicionar", se o input tiver texto, adicionar o mesmo num
    parágrafo por baixo do botão. 
   
    Não pode ser adicionada uma palavra ou frase repetida.
---------------------------------------------------------------------------- */


document.querySelector('button').addEventListener('click', () => {
    let textoInput = document.querySelector('#text_post')
    if (textoInput.value.trim() === "" || document.querySelector('#posts').innerHTML.toLocaleLowerCase().includes(textoInput.value.toLowerCase())){
        return
    }else{
        const novoP = document.createElement('p')
        novoP.textContent = textoInput.value
        document.querySelector('#posts').appendChild(novoP)
        textoInput.value = ''
        textoInput.focus()
    }
})

// Solução Sugerida

let frases = []

document.querySelector('.btn').addEventListener('click', () => {
    let input = document.querySelector('#text_post')
    if(input.value !== ''){
        
        if(!frases.includes(input.value)){
            let p = document.createElement('p')
            p.textContent = input.value
            document.querySelector('#posts').appendChild(p)
            frases.push(input.value);
        }
        input.value = ''
        input.focus()
    }
})