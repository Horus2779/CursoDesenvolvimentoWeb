/* ----------------------------------------------------------------------------

Exercício: 027
Enunciado:
    Existe um input de texto no qual, sempre que for alterado o seu conteúdo,
    o mesmo deve ser apresentado em tempo real no div cujo id é igual a "conteudo".
    Contudo, se o texto contém a palavra "olá", a cor do texto deve ser verde.
    Caso contrário deverá ser sempre branca.
---------------------------------------------------------------------------- */

let input = document.querySelector('#text_frase')
let conteudo = document.querySelector('#conteudo')

input.addEventListener('input', () =>{
    conteudo.innerText = input.value

    conteudo.innerText === 'olá' ? conteudo.style.color = 'green' : conteudo.style.color = 'white'
})