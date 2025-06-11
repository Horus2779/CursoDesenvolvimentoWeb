/* ----------------------------------------------------------------------------

Exercício: 018
Enunciado:
    Ao clicar em "Adicionar", se o input tiver texto, adicionar o mesmo num
    parágrafo por baixo do botão. 
   
    Cada texto inserido deve ser precedido da expressão "Eliminar" com cor vermelha
    e como efeito de um mouse hover.

    Se clicar em "Eliminar" apenas poderá ser removida a palavra ou frase
    correspondente.
---------------------------------------------------------------------------- */

document.querySelector('.btn').addEventListener('click', () => {
    let textoInput = document.querySelector('#text_post')
    if (textoInput.value.trim() === "" ){
        return
    }else{
        const novoP = document.createElement('p')
        const eliminar = document.createElement('span')
        eliminar.textContent = "ELIMINAR"
        eliminar.style.marginRight = '10px'
        eliminar.style.color = 'red'
        eliminar.setAttribute('class', 'eliminar')
        novoP.appendChild(eliminar)
        novoP.appendChild(document.createTextNode(textoInput.value))
        document.querySelector('#posts').appendChild(novoP)
        textoInput.value = ''
        textoInput.focus()
    }
})

document.querySelector('#posts').addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('eliminar')) {
        e.target.style.color = 'darkred'
    }
})

document.querySelector('#posts').addEventListener('mouseout', (e) => {
    if (e.target.classList.contains('eliminar')) {
        e.target.style.color = 'red'
    }
})

document.querySelector('#posts').addEventListener('click', (e) => {
    if (e.target.classList.contains('eliminar')) {
        e.target.parentElement.remove()
    }
})


//Solução Sugerida
document.querySelector('.btn').addEventListener('click', () =>{
    let input = document.querySelector('#text_post')

    if(input.value !== ''){
        let p = document.createElement('p')

        let eliminar = document.createAttribute('span')
        eliminar.classList.add('text-danger')
        eliminar.style.cursor = 'pointer'
        eliminar.textContent = 'Eliminiar'
        eliminar.addEventListener('click', () =>{
            eliminar.parentNode.remove()
        })
        p.appendChild(eliminar)
        p.append(` | ${input.value}`)
        document.querySelector('#posts').appendChild(p)
        input.value = ''
        input.focus()
    }
})