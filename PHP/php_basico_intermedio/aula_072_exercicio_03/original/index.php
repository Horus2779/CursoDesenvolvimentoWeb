<?php

// criar a função aqui ...

function dividir($v1, $v2){
    if($v2 == 0){
        return null;
    }
    return $v1/$v2;
}


?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP - Nível 1 - Exercício 02</title>
</head>

<body>

    <?php for ($i = 0; $i <= 20; $i++) : ?>

        <?php 
            $valor1 = rand(0,10);
            $valor2 = rand(0,10);
            $resultado = dividir($valor1, $valor2);
        ?>

        <h1>Resultado</h1>
        <h3><?= "$valor1 / $valor2 = " . $resultado === null ? "Divisão por Zero" : $resultado?></h3>

    <?php endfor; ?>


</body>

</html>