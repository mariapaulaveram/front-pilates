import {useLocation, useNavigate } from 'react-router-dom';
import styles from '../styles/Logueados.module.css';
import ClasesDisponiblesHoy from '../componentes/ClasesDisponiblesHoy';


function Logueados() {
    const location = useLocation();
    const navigate = useNavigate();
    const email = location.state?.email || 'usuario desconocido';

    const handleLogout = () => {
        navigate('/login');
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.saludoContainer}>
                <span className={styles.saludo}>¡Bienvenido, {email}!</span>
                <button onClick={handleLogout} className={styles.logout}>
                    Cerrar sesión
                </button>
            </div>
            <section id="horarios" className={styles.presentacion}>
                <ClasesDisponiblesHoy />
            </section>
        </div>
    );
}

export default Logueados;


