<?php
ini_set('display_errors', 0); // Evita mostrar errores como HTML
ini_set('log_errors', 1); // Habilita logueo
ini_set('error_log', __DIR__ . '/error_log.txt'); // Log en este archivo

header('Content-Type: application/json');
require_once __DIR__ . '/../model/connection.php';
require_once __DIR__ . '/../model/loginModel.php';

$login = new LoginModel($conn);
[$username, $password, $email, $rememberme] = $login->bringInput();

if (!$username || !$password || !$email) {
    http_response_code(400);
    echo json_encode([
        "success" => false,
        "error" => "Usuario y contraseña son obligatorios"
    ]);
    exit;
}

$hashGuardado = $login->bringPassword($email);
//password_verify()
$resultado = $password === $hashGuardado;

if ($resultado !== true) {
    echo json_encode(["success" => false,
        "error" => "Contraseña o correo incorrectos."]);
    exit;
}

if ($rememberme) {
    $lifetime = 7 * 24 * 60 * 60; 
    session_set_cookie_params([
        'lifetime' => $lifetime,
        'path' => '/',
        'secure' => false,   
        'httponly' => true,
        'samesite' => 'Lax'
    ]);
}

session_start();

$id_user = $login->bringUser($email);

$_SESSION['usuario'] = [
    "id" => $id_user['id'],
    "username" => $id_user['username'],
    "email" => $email
];
$login->closeConn();

echo json_encode(["success" => true,
        "mensaje" => "Inicio de sesion exitoso"]);
?>