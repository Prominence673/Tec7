<?php
session_start();
$response = [];

if (isset($_SESSION['user'])) {
    $response['loggedIn'] = true;
    $response['user'] = $_SESSION['user'];
} else {
    $response['loggedIn'] = false;
}

header('Content-Type: application/json');
echo json_encode($response);
?>