import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginAlumnos() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/api/alumnos', { email, password });

            if (response.status === 200) {
                // Login exitoso
                navigate('/logueados', { state: { email } });

            } else {
                // Login fallido
                setErrorMessage(response.data.message || 'Credenciales incorrectas');
            }
        } catch (error) {
            console.error('Error en login:', error);
            setErrorMessage('Error al conectar con el servidor');
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="card shadow-sm p-4" style={{ maxWidth: '400px', width: '100%' }}>
                <h2 className="text-center text-muted mb-4">Bienvenida a Pilates</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Usuario</label>
                        <input
                            type="text"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control"
                            placeholder="Ingresá tu usuario"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control"
                            placeholder="••••••••"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Iniciar sesión</button>
                    {errorMessage && (
                        <div className="alert alert-danger mt-3 text-center" role="alert">
                            {errorMessage}
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
}

export default LoginAlumnos;
