/* ----------------------------------------------------------------------------

Exercício: 011
Enunciado:
    A grelha inicial contém dezasseis imgs sem souce.
    Quando clicamos numa das imgs, vamos apresentar o símbolo X (imagem)
    No clique seguinte, que só pode acontecer numa img que não tenha símbolo,
    vamos apresentar o símbolo 'O'.
---------------------------------------------------------------------------- */

let next_x = true

document.querySelectorAll('img').forEach((i) => {
    i.addEventListener('click', (e) => {
        if(document.querySelector('#' + e.target.id).getAttribute('src')){
            return
        }else {
            if(next_x == true) {
                document.querySelector('#' + e.target.id).setAttribute('src', 'x.png')
                next_x = false
            }else {
                document.querySelector('#' + e.target.id).setAttribute('src', 'o.png')
                next_x = true
            } 
        }    
    })
})

/*let next_x = true;

document.querySelectorAll('img').forEach((img) => {
    img.addEventListener('click', (e) => {
        const el = e.target;

        if (el.getAttribute('src')) return;

        el.setAttribute('src', next_x ? 'x.png' : 'o.png');
        next_x = !next_x;
    });
});
*/

//Solução Sugerida
let filled_imgs = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let symbol = "x"
document.querySelectorAll('[id^="img"]').forEach(img => {
    img.addEventListener('click', img => {
        let index = img.target.id.substring(3)
        place_symbol(index)
    })
})

function place_symbol(index){
    if(filled_imgs[index-1] != 0) return

    document.querySelector('#img' + index).setAttribute('src', './' + symbol + '.png')
    filled_imgs[index - 1] = 1;
    if(symbol == 'x'){
        symbol = 'o'
    }else {
        symbol = 'x'
    }
}