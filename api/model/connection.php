<?php
$host = "localhost";
$user = "root";
$pass = "";
$dbname = "scBD";

try {
    $conn = new mysqli($host, $user, $pass, $dbname);
    
    if ($conn->connect_error) {
        throw new Exception("Error de conexión: " . $conn->connect_error);
    }

} catch (Exception $e) {
    echo json_encode(["error" => "Ocurrió un error en la conexión: " . $e->getMessage()]);
    die();
}
?>