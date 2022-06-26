<?php

	require_once  __DIR__ . '/config_db.php';

	$connString = 'mysql:host=' . $config_db['host'] . ';dbname=' . $config_db['dbname'] . ';port=' . $config_db['port'] . '';

	try
	{
		$db = new PDO($connString, $config_db['user'], $config_db['pass']);
		$connectionStat = true;
	}
	catch (Exception $e) {
		echo 'Connection à la base de donnée impossible. ' . $e->getMessage();
		$connectionStat = false;
	}
?>