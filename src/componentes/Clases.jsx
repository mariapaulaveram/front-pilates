import styles from "../styles/Clases.module.css";
import { useState, useEffect } from "react";
import axios from "axios";


const Clases = () => {
    const [loading, setLoading] = useState(false);
    const [clases, setClases] = useState([]);

    useEffect(() => {
        const cargarClases = async () => {
            try {
                setLoading(true);
                const response = await axios.get("http://localhost:3000/api/clases");
                setClases(response.data);
            } catch (error) {
                console.error("Error al cargar clases:", error);
            } finally {
                setLoading(false);
            }
        };
        cargarClases();
    }, []);

    return (
        <section className={styles.holder}>
            <div className={styles.tituloWrapper}>
                <h2 className={styles.tituloInstitucional}>Horarios de Clases</h2>

            </div>
            {loading ? (
                <p className={styles.loading}>Cargando...</p>
            ) : (
                <div className={styles.flexContainer}>
                    <table className={styles.tablaClases}>
                        <thead>
                            <tr>
                                <th>Día</th>
                                <th>Hora</th>
                                <th>Profesor</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clases.map((item, index) => (
                                <tr key={item.id || index}>
                                    <td>{item.dia}</td>
                                    <td>{item.hora}</td>
                                    <td>{item.profesor}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
            )}
        </section>
    );
};

export default Clases;
