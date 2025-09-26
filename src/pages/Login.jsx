import '../styles/login.css'
import BackButton from '@/components/BackButton';
import { useState, useEffect } from 'react'
import handleSubmit from '@/components/handleSubmit';
import handleChecksession from '@/components/handleChecksession';
import { WavyBackground } from "@/components/ui/shadcn-io/wavy-background/index";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Login() {
    const navigate = useNavigate();
    const [form, setForm] = useState({ username: '', email: '', password: '', checked: false});
    const [check, setChecked] = useState(false);

    let dire = "/api/controller/loginController.php";
    let tipo = 'application/json';

    useEffect(() => {
        const handleCheck = async () => {
        const response = await handleChecksession();
        if (response.loggedIn) {
            navigate('/');
        }
        };
        handleCheck();
    }, [navigate]);
    
    const handleChange = async (e) => {
        const { name, value, checked } = e.target;
        const rememberme = 'rememberme';
        setForm(prev => ({ ...prev, [name]: value }));
        setForm(prev => ({ ...prev, [rememberme]: checked }));
    };

    const handleShowPassword = async (e) => {
        let checked = e.target.checked;
        setChecked(checked);
        const InPass = document.getElementById('password');

        if(!checked){
            InPass.type = 'password';
            return
            
        }
        InPass.type = 'text';
    };
    
    const handleRedirect = async (e) => {
        const response = await handleSubmit(e,{ dire, datos: form, tipo });
        
        if(!response.success){
            toast.error(response.error || 'Ha ocurrido un problema');
            return;
        }
         toast.success(response.mensaje || 'Inicio de session exitoso')
         navigate('/');
    }
    return (
        <>
        <WavyBackground
        backgroundFill="#0f0f23"
        colors={["#38bdf8", "#818cf8", "#c084fc", "#e879f9"]}
        waveWidth={50}
        blur={10}
        speed="fast"
        waveOpacity={0.5}
        containerClassName="h-full w-full"
        className="absolute inset-0 flex items-center justify-center"
        >
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
                    <form onSubmit={handleRedirect}>
                        <label htmlFor="username">
                            <p>Usuario</p>
                            <input className='input' type="text" name="username" id="username" value={form.username} onChange={handleChange} maxLength={30} required/>
                        </label>
                        <label htmlFor="email">
                            <p>Email</p>
                            <input className='input' type="text" name="email" id="email" value={form.email} onChange={handleChange} maxLength={255} required/>
                        </label>
                        <label htmlFor="password">
                            <p>Contraseña</p>
                            <input className='input' type={check === true ? 'text' : 'password'} name="password" id="password" value={form.password} onChange={handleChange} maxLength={32} required/>
                        </label>
                        <div className='check-container'>
                            <label htmlFor="showpassword">
                            <p>Mostrar contraseña</p>
                            <input type="checkbox" id="showpassword" className='checkbox' name='showpassword' onChange={handleShowPassword} />
                            </label>
                            <label htmlFor="rememberme">
                            <p>Recordame</p>
                            <input type="checkbox" id="rememberme" className='checkbox' name='rememberme' onChange={handleChange} />
                            </label>
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
</WavyBackground>
</>
    );
} 