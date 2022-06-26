<?php
require_once ('db.php');
require_once("api.php");
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
$request = explode('?',$_SERVER['REQUEST_URI']);
try{
    if(!empty($request)){
        $url = explode("/", $request[0]);
        switch($url[2]){
            case "formations" : 
                getFormations();
            break;
            case "formation" : 
                if(!empty($request[1])){
                    getCardById($request[1]);
                } else {
                    throw new Exception ("Vous n'avez pas renseigné le numéro de formation");
                }
            break;
            case "postCard" :{
             postCardProject();
                
            }
            default : throw new Exception ("La demande n'est pas valide, vérifiez l'url");
        }
    } else {
        throw new Exception ("Problème de récupération de données.");
    }
} catch(Exception $e){
    $erreur =[
        "message" => $e->getMessage(),
        "code" => $e->getCode()
    ];
    print_r($erreur);
}
