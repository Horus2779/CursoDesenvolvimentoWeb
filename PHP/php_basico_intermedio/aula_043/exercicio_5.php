<?php

    /* 
    Apresenta a frase abaixo 10 vezes, com uma opacidade cada vez MENOR até ser quase invisível
    
    É um exercício de utilização de um ciclo para repetir um texto e, ao mesmo tempo
    alterar o valor da opacidade do estilo de letra.

    Deve usar o atributo style para o efeito visual.
    */

    $frase = "Esta frase vai aparecer com diferentes opacidades.";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <?php for($i = 10; $i >= 0; $i--) : ?>
        <p style="opacity: <?= $i/10 ?>;"><?= $frase ?></p>
    <?php endfor; ?>

</body>
</html>