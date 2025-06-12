<?php

// lógica de tratamento do formulário

session_start();

if ($_SERVER['REQUEST_METHOD'] != 'POST') {
    die('Acesso inválido.');
}

$inputs = [];

//Declaração de variaveis
$inputs['text_valor_1'] = [
    'value' => '',
    'error' => ''
];

$inputs['text_valor_2'] = [
    'value' => '',
    'error' => ''
];


//Logica para campos vazios
if(empty($_POST['text_valor_1'])){
    $inputs['text_valor_1']['error'] = 'O campo Valor 1 é obrigatorio';
} else {
    $inputs['text_valor_1']['value'] = $_POST['text_valor_1'];
    if($_POST['text_valor_1'] < 0 || !is_numeric($_POST['text_valor_1'])){
        $inputs['text_valor_1']['error'] = 'O campo de Valor 1 deve ser um numero positivo';
    }
}

if(empty($_POST['text_valor_2'])){
    $inputs['text_valor_2']['error'] = 'O campo Valor 2 é obrigatorio';
} else {
    $inputs['text_valor_2']['value'] = $_POST['text_valor_2'];
    if($_POST['text_valor_2'] < 0 || !is_numeric($_POST['text_valor_2'])){
        $inputs['text_valor_2']['error'] = 'O campo de Valor 2 deve ser um numero positivo';
    }
}


//Logica para numero positivo
if(!empty($inputs['text_valor_1']['error']) || !empty($inputs['text_valor_2']['error'])){
    $_SESSION['inputs'] = $inputs;
    header('Location: index.php');
    return;
}

echo $inputs['text_valor_1']['value'] . " x " . $inputs['text_valor_2']['value'] . " = " . $inputs['text_valor_1']['value'] * $inputs['text_valor_2']['value'];