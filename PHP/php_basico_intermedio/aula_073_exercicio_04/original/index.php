<?php

$erro = '';
$sucesso = '';

if($_SERVER['REQUEST_METHOD'] == 'POST'){

    if(empty($_POST['text_value'])){
        $erro = 'Campo de texto vazio';
    } else{

        $texto = $_POST['text_value'];

        if(is_numeric($texto)){
           $file = fopen('dados_numericos.txt', 'a'); 
           fputs($file, $texto . PHP_EOL);
           fclose($file);
           $sucesso = 'Valor numérico guardado com sucesso.';
        } elseif(is_string($texto)){
           $file = fopen('dados_string.txt', 'a');
           fputs($file, $texto . PHP_EOL);
           fclose($file);
           $sucesso = 'Valor string guardado com sucesso.';
        }
    }

}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP - Nível 1 - Exercício 04</title>
</head>
<body>
    
    <form action="index.php" method="post">
        <input type="text" name="text_value">
        <input type="submit" value="Enviar">
    </form>

    <?= empty($erro) ? $sucesso : $erro ?>

</body>
</html>