<?php

    /* 
    Dada a coleção de nomes, devem ser todos apresentados,
    mas a partir de maria (inclusive) devem ser com texto a vermelho
    */

    $nomes = ['joao', 'ana', 'carlos', 'marco', 'maria', 'silvia', 'helena', 'ricardo'];

    $set = array_search('maria', $nomes);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .vermelho {
            color: red;
        }
    </style>
</head>
<body>
    
    <?php for($i = 0, $total = count($nomes); $i < $total; $i++) : ?>
        <?php if($i >= $set) : ?>
            <p class="vermelho"><?= $nomes[$i] ?></p>
        <?php else : ?>
            <p><?= $nomes[$i]?></p>
        <?php endif; ?>
    <?php endfor ?>
        

</body>
</html>


<!-- Solução Sugerida
<?php

    /* 
    Dada a coleção de nomes, devem ser todos apresentados,
    mas a partir de maria (inclusive) devem ser com texto a vermelho
    */

    $nomes = ['joao', 'ana', 'carlos', 'marco', 'maria', 'silvia', 'helena', 'ricardo'];

    $css = '';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .vermelho {
            color: red;
        }
    </style>
</head>
<body>
    
    <?php foreach($nomes as $nome) : ?>
        <?php if($nome == 'maria') $css = 'vermelho' ?>
        #<h3 class="<?= $css ?>"><?= $nome ?></h3>
    <?php endforeach ?>
        

</body>
</html> -->