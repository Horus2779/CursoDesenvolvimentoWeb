/* ----------------------------------------------------------------------------

Exercício: 022
Enunciado:
    Está disponível um elemento select com 3 opções.
    Por baixo existem 4 checkboxes.
    Quando é selecionada a opção 3 no select, as checkboxes devem ficar ativas.
    Qualquer outra opção, devem desativar as checkboxes.
---------------------------------------------------------------------------- */

let opcoes = document.querySelector('[name="select_opcoes"]')

opcoes.addEventListener('change', () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
    if (opcoes.value === "3") {
        checkboxes.forEach(box => box.disabled = false);
    } else {
        checkboxes.forEach(box => box.disabled = true);
    }
});



