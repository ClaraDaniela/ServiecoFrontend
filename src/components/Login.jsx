{/* useState con evento onSubmit */ }
import "../styles/Login.css"
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from 'react';

const USUARIO_VALIDO = {
    usuario: "admin",
    password: "1234",
};

function Login({ setIsLogged, setUser }) {
    const [usuario, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const aviso = location.state?.aviso;

    const manejarEnvio = (e) => {
        e.preventDefault(); // Evita que la página se recargue

        if (usuario === USUARIO_VALIDO.usuario && password === USUARIO_VALIDO.password) {

            console.log('Login exitoso');
            setIsLogged(true);
            setUser({ nombre: 'Admin' }); 
            navigate('/dashboard');
        } else {
            alert("Usuario o contraseña incorrectos. Intente nuevamente.")
        }

        // Limpiar los campos después de ejecutar el evento onSubmit
        setUserName('');
        setPassword('');
    };

    return (
        <div id="formulario-login">
            {aviso && <h2 style={{ color: "red" }}>{aviso}</h2>}

            <form onSubmit={manejarEnvio}>
                <div>
                    <label>Usuario:</label>
                    <input
                        type="text"
                        value={usuario}
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder="Escribe tu usuario"
                    />
                </div>

                <div>
                    <label>Contraseña:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Escribe tu contraseña"
                    />
                </div>
                <hr />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default Login;