<?php

session_start();

$inputs = [];
if(isset($_SESSION['inputs'])){

    $inputs = $_SESSION['inputs'];
    unset($_SESSION['inputs']);
}

function show_error($campo){
    global $inputs;
    if(key_exists($campo, $inputs)){
        if(!empty($inputs[$campo]['error'])){
            return '<span class="text-danger"><small><i>' . $inputs[$campo]['error'] . '</i></small></span><br>';
        } else {
            return '';
        }
    } else {
        return '';
    }
}

function show_value($campo){
    global $inputs;
    if(key_exists($campo, $inputs)){
        if(!empty($inputs[$campo]['value'])){
            return $inputs[$campo]['value'];
        } else {
            return '';
        }
    } else {
        return '';
    }
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP - Nível 1 - Exercício 01</title>
    <style>
        .wrapper {
            width: 600px;
            margin: 50px auto;
        }

        input[type=text] {
            width: 100%;
            padding: 5px;
            margin: 10px 0px;
        }
    </style>
</head>

<body>

    <div class="wrapper">
        <form action="tratamento.php" method="post">
            <label>Valor 1</label>
            <input type="text" name="text_valor_1" value="<?= show_value('text_valor_1') ?>">
            <?= show_error('text_valor_1') ?>
            <label>Valor 2</label>
            <input type="text" name="text_valor_2" value="<?= show_value('text_valor_2') ?>">
            <?= show_error('text_valor_2') ?>
            <input type="submit" value="Executar">
        </form>
    </div>

</body>

</html>