import '../styles/login.css'
import BackButton from '../components/BackButton';
import {useState} from 'react'
import handleSubmit from '../components/handleSubmit';

export default function Login() {
    const [form, setForm] = useState({ username: '', email: '', password: '', checked: false});
    let dire = "/api/controller/loginController.php";
    let tipo = 'application/json';
    const handleChange = async (e) => {
        const { name, value, checked } = e.target;
        const rememberme = 'rememberme';
        setForm(prev => ({ ...prev, [name]: value }));
        setForm(prev => ({ ...prev, [rememberme]: checked }));
    };
    return (
        <>
        <div className='login-main-container'>
            <BackButton/> 
            <div className="login-container">
                <div className='login'>
                    <div className='title-login'>
                        <h1>¡Bienvenido de nuevo!</h1>
                        <h4>Nos alegra volver a verte</h4>
                    </div>
                <div className='form-login'>
                    <div className='login-info'>
                        <h2>Sistema de login</h2>
                        <h4>¡Hola!, aqui deberas ingresar tus datos para iniciar sesion</h4>
                    </div>
                    <form onSubmit={(e) => {handleSubmit(e,{ dire, datos: form, tipo });}}>
                        <label htmlFor="username">
                            <p>Usuario</p>
                            <input className='input' type="text" name="username" id="username" value={form.username} onChange={handleChange} required/>
                        </label>
                        <label htmlFor="email">
                            <p>Email</p>
                            <input className='input' type="text" name="email" id="email" value={form.email} onChange={handleChange} required/>
                        </label>
                        <label htmlFor="password">
                            <p>Contraseña</p>
                            <input className='input' type="password" name="password" id="password" value={form.password} onChange={handleChange} required/>
                        </label>
                        <div className='check-container'>
                            <p>Mostrar contraseña</p>
                            <input type="checkbox" id="showpassword" className='checkbox' name='showpassword' />
                            <p>Recordame</p>
                            <input type="checkbox" id="rememberme" className='checkbox' name='rememberme' onChange={handleChange} />
                        </div>
                        <button className='BtLogin'>Ingresar</button>
                    </form>
                </div>
                <div className='copyright-container'>
                    <h4>Todos los derechos reservados @2025</h4>
                </div>
            </div>
        </div>
        </div>
        </>
    );
} 