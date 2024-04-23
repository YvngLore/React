<?php
use Slim\Factory\AppFactory;

require __DIR__ . '/vendor/autoload.php';
require __DIR__ . '/controllers/AlunniController.php';

include_once("controllers/AlunniController.php");

$app = AppFactory::create();

$app->get('/alunni', "AlunniController:index");
$app->get('/alunni/{matricola}', "AlunniController:getAlunnoByMatricola");
$app->post('/alunni', "AlunniController:insertAlunno");
$app->put('/alunni/{matricola}', "AlunniController:updateAlunno");
$app->delete('/alunni/{matricola}', "AlunniController:deleteAlunno");

$app->run();
