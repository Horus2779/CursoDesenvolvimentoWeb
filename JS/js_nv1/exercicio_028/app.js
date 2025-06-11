/* ----------------------------------------------------------------------------

Exercício: 028
Enunciado:
    Existe um botão o qual, ao ser clicado, cria 20 números aleatórios entre 1 e 1000.
    Esses números devem ser apresentados cada um em sua própria linha dentro do elemento
    cujo id é igual a "numeros".
---------------------------------------------------------------------------- */

document.querySelector('.btn').addEventListener('click', () => {
    document.querySelector('#numeros').innerHTML = ''
    for(let n = 0; n <= 20; n++){
        let p = document.createElement('p')
        p.innerText = randomNum()
        document.querySelector('#numeros').appendChild(p)
    }
})

function randomNum(){
    return Math.floor(Math.random() * 1000) + 1
}