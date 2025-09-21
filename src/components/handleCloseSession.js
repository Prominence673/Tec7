import axios from "axios";
import { toast } from "react-toastify";

export default async function handleCloseSession(){
    try {
        await axios.post("/api/controller/logoutSession.php");
        toast.success('se ha cerrado session!');
        location.reload();
    } catch (error) {
        console.log(error);
        toast.error('ha ocurrido un error');
    }
}