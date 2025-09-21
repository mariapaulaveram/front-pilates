import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../styles/ClasesReservadas.module.css';

function ClasesReservadas({ onClose }) {
  const [clases, setClases] = useState([]);
  const [error, setError] = useState(null);
  const id_alumno = localStorage.getItem('id_alumno');

  useEffect(() => {
    async function fetchClases() {
      try {
        const response = await axios.get(`/api/reservas/${id_alumno}`);
        console.log('Datos recibidos:', response.data);

        // Asegura que siempre sea un array
        const datos = Array.isArray(response.data)
          ? response.data
          : [response.data];

        setClases(datos);
      } catch (error) {
        console.error('Error al cargar clases reservadas:', error);
        setError('No se pudieron cargar las clases reservadas.');
      }
    }

    fetchClases();
  }, [id_alumno]);

  return (
    <div className={styles.reservadasContainer}>
      <div className={styles.header}>
        <h2>Clases reservadas</h2>
        <button className={styles.closeButton} onClick={onClose}>❌</button>
      </div>

      {error ? (
        <p className={styles.error}>{error}</p>
      ) : clases.length === 0 ? (
        <p>No tenés clases reservadas.</p>
      ) : (
        <ul className={styles.listaClases}>
          {clases.map((clase, index) => (
            <li key={index} className={styles.itemClase}>
              <strong>Día:</strong> {clase.dia} &nbsp;|&nbsp;
              <strong>Hora:</strong> {clase.hora} &nbsp;|&nbsp;
              <strong>Profesor:</strong> {clase.profesor}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ClasesReservadas;
