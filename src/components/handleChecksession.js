import axios from 'axios';

export default async function checkSession(){
    try {
        const {data} = await axios.post("/api/controller/checkSession.php");
        return data;
    } catch (error) {
        console.error("Error al enviar datos:", error);
        return { loggedIn: false, error: true };
    }
}