<?php 



function getFormations(){
    $req = "SELECT * FROM card";
    $db = getConnexion();
    $stmt = $db->prepare($req);
    $stmt->execute();
    $formations = $stmt->fetchAll(PDO::FETCH_ASSOC);
    sendJSON($formations);
}

function getCardById($id){
    $req = "SELECT * FROM card WHERE id = :id";
    $db = getConnexion();
    $stmt = $db->prepare($req);
    $stmt->execute([
        ":id" => $id
    ]);
    $formations = $stmt->fetchAll(PDO::FETCH_ASSOC);
    sendJSON($formations);
}

function postCardProject(){
    $inputJSON = file_get_contents("php://input");
    $_POST = json_decode($inputJSON, TRUE);
    $sql = 'INSERT INTO card(name, description, photo) VALUES (:nam, :descriptio, :photo)';
    $db = getConnexion();
    $query = $db->prepare($sql);
    $query->execute([
	':nam' => $_POST['name'],
	':descriptio' => $_POST['message'],
	':photo' => $_POST['repo'],
    
]);
    $response = "success";
    sendJSON($response);
    die();
   
}


function getConnexion(){
    $config_db = [
        'host' => '127.0.0.1',
        'port' => '8889',
        'dbname' => 'portefolio',
        'user' => 'root',
        'pass' => 'root'
    ];
    $connString = 'mysql:host=' . $config_db['host'] . ';dbname=' . $config_db['dbname'] . ';port=' . $config_db['port'] . '';
    return new PDO($connString, $config_db['user'], $config_db['pass']);
}

function sendJSON($infos){
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
    echo json_encode($infos);
}