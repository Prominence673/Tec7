import '../styles/login.css'
import BackButton from '../components/BackButton';

export default function Login() {
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
                    <form>
                        <label htmlFor="user">
                            <p>Usuario</p>
                            <input className='input' type="text" name="user" id="user" required/>
                        </label>
                        <label htmlFor="password">
                            <p>Contraseña</p>
                            <input className='input' type="password" name="password" id="password" required/>
                        </label>
                        <div className='check-container'>
                            <p>Mostrar contraseña</p>
                            <input type="checkbox" id="showpassword" className='checkbox' name='showpassword' />
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