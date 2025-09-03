import {useLocation, useNavigate } from 'react-router-dom';
import styles from '../styles/Logueados.module.css';
import ClasesDisponibles from '../componentes/ClasesDisponibles';

function Logueados() {
    const location = useLocation();
    const navigate = useNavigate();
    const email = location.state?.email || 'usuario desconocido';

    const handleLogout = () => {
        navigate('/login');
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.card}>
                <h2 className={styles.title}>¡Bienvenido, {email}!</h2>
                <button onClick={handleLogout} className={styles.button}>
                    Cerrar sesión
                </button>
            </div>
            <div>
                {/* Presentación de Clases Disponibles */}
                <section id="horarios" className={styles.presentacion}>
                    <ClasesDisponibles />
                </section>
            </div>
        </div>
    );
}

export default Logueados;


