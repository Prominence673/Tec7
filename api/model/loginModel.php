<?php
class LoginModel{
    private $conn;
    public function __construct($conn){
        $this->conn = $conn;
    }
    public function bringPassword($mail){
    $stmt = $this->conn->prepare("CALL SP_Bringpassword(?)");
    $stmt->bind_param("s", $mail);
    $stmt->execute();
    $resultado = $stmt->get_result();
    $usuario = $resultado->fetch_assoc(); 
    $stmt->close();
    
    if (!$usuario) {
        return null; 
    }
    return $hashGuardado = $usuario['u_password']; 
    
    }
   /*
   public function SP_BringVerificationStatus($mail) {
    $stmt = $this->conn->prepare("CALL SPBringVerificationStatus(?)");
    $stmt->bind_param("s", $mail);

    if (!$stmt->execute()) {
        $stmt->close();
        return null;
    }

    $result = $stmt->get_result();
    $usuario = $result ? $result->fetch_assoc() : null;
    $stmt->close();

    if (!$usuario || !isset($usuario['verificado'])) {
        return null; 
    }

    return (bool)$usuario['verificado'];
    }
    */
    public function bringUser($email){
        $stmt = $this->conn->prepare("CALL SP_BringUser(?)");
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $resultado = $stmt->get_result();
        $user = $resultado->fetch_assoc(); 
        $stmt->close();
        if (!$user) {
            return null;
        }
        return [
        'id' => $user['u_id'],
        'username' => $user['u_username'],
        ];
    }
        public function bringInput() {
        $raw = file_get_contents("php://input");
        $datos = json_decode($raw, true);

        if (!is_array($datos)) {
            return [null, null, null];
        }
        $username = trim($datos['username']);
        $password = trim($datos['password']);
        $email = trim($datos['email']);
        $rememberme = $datos['rememberme'] ?? false;

        return [$username, $password, $email, $rememberme];
    }
    public function closeConn(){
        $this->conn->close();
    }
}
?>