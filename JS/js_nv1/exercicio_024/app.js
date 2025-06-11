/* ----------------------------------------------------------------------------

Exercício: 024
Enunciado:
    Existem 8 checkboxes referentes a um conjunto de permissões de usuário.
    Cada uma delas pode ser checkada individualmente.
    Por baixo, existe um select com 3 perfis de usuário: administrador, coordenador
    e operador.
    Ao selecionar um perfil, as checkboxes devem ser checkadas de acordo com o
    perfil selecionado.

    Administrador: 
        Todas as permissões

    Coordenador: 
        Coordenação dos trabalhos
        Gestão de calendário
        Utilização das máquinas
        Utilização das ferramentas

    Operador:
        Utilização das máquinas
        Utilização das ferramentas

    NOTA: sem perfil, todas as checkboxes devem estar descheckadas.

---------------------------------------------------------------------------- */


let opcao = document.querySelector('#select_perfil')
let cBox = document.querySelectorAll('input[type="checkbox"]')

opcao.addEventListener('change', e => {
    if(opcao.value === 'administrador'){
        cBox.forEach(box => {
            box.checked = true
        })
    }else if(opcao.value === 'coordenador'){
        for(let n = 1; n <= 8; n++){
            if(n >= 5 && n <= 8){
                document.querySelector(`#check_${n}`).checked = true
            }
        }
    }else if(opcao.value === 'operador'){
        for(let n = 1; n <= 8; n++){
            if(n == 7 || n == 8){
                document.querySelector(`#check_${n}`).checked = true
            }
        }
    }else{
       cBox.forEach(box => {
            box.checked = false
        }) 
    }
})