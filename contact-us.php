<?php

//Bugfixing
//ini_set('display_errors', 1);
//ini_set('display_startup_errors', 1);
//error_reporting(E_ALL);



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
/*
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
*/

$formSuccess = isset($_GET['success']);
$nameErr = $emailErr = $telephoneErr = $messageErr = "";
$name = $company = $email = $telephone = $message = "";
$nameClass = $emailClass = $telephoneClass = $messageClass = $companyClass = "";


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $marketing = isset($_POST['marketing']) ? 1 : 0;

    if (empty($_POST["name"])) {
        $nameErr = "Name is Required";
        $nameClass = "input-invalid";
    } else {
        $name = test_input($_POST["name"]);
        $nameClass = "input-valid";
    }

    if (empty($_POST["company"])) {
        $company = "";
        $companyClass = "";
    } else {
        $company = test_input($_POST["company"]);
        $companyClass = "input-valid";
    }

    if (empty($_POST["email"])) {
        $emailErr = "Email is Required";
        $emailClass = "input-invalid";
    } elseif (!filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {
        $email = test_input($_POST["email"]);
        $emailErr = "Invalid email format";
        $emailClass = "input-invalid";
    } else {
        $email = test_input($_POST["email"]);
        $emailClass = "input-valid";
    }

    if (empty($_POST["telephone"])) {
        $telephoneErr = "Telephone is Required";
        $telephoneClass = "input-invalid";
    } else {
        $telephone = test_input($_POST["telephone"]);
        $telephoneClass = "input-valid";
    }

    if (empty($_POST["message"])) {
        $messageErr = "Message is Required";
        $messageClass = "input-invalid";
    } else {
        $message = test_input($_POST["message"]);
        $messageClass = "input-valid";
    }

    if (
        empty($nameErr) &&
        empty($emailErr) &&
        empty($telephoneErr) &&
        empty($messageErr)
    ) {
        // Insert into database here
        $sql = "INSERT INTO contact_form 
        (name, company, email, telephone, message, marketing) 
        VALUES (:name, :company, :email, :telephone, :message, :marketing)";
        $stmt = $pdo->prepare($sql);
        $stmt->execute([
            ':name' => $name,
            ':company' => $company,
            ':email' => $email,
            ':telephone' => $telephone,
            ':message' => $message,
            ':marketing' => $marketing,
        ]);


        header("Location: contact-us.php?success=1#contact-us-form");
        exit;
    }
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}



require "views/contact-us.view.php";