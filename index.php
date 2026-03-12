<?php

//Database Connecting//
require_once __DIR__ . '/vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

$host = $_ENV['DB_HOST'];
$port = $_ENV['DB_PORT'];
$db   = $_ENV['DB_NAME'];
$user = $_ENV['DB_USER'];
$pass = $_ENV['DB_PASS'];

try {
    $dsn = "mysql:host=$host;dbname=$db;charset=utf8mb4";
    $pdo = new PDO($dsn, $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    error_log($e->getMessage()); // logs the error
    die("Database connection failed. Please try again later."); // user-friendly
}
//Database Connecting//

//Error checking
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


$sql = "SELECT * FROM news ORDER BY id ASC";
$stmt = $pdo->query($sql);

$articles = $stmt->fetchAll(PDO::FETCH_ASSOC);

$total = count($articles);

$start = floor(time() / 20) % $total;

$displayArticles = [];

for ($i = 0; $i < 3; $i++) {
    $displayArticles[] = $articles[($start + $i) % $total];
}

require "views/index.view.php";