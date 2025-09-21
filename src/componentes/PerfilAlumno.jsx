import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../styles/PerfilAlumno.module.css';

function PerfilAlumno({ onClose }) {
  const [alumno, setAlumno] = useState(null);
  const id_alumno = localStorage.getItem('id_alumno');

  useEffect(() => {
    async function fetchPerfil() {
      try {
        const response = await axios.get(`/api/alumnos/${id_alumno}`);
        setAlumno(response.data);
      } catch (error) {
        console.error('Error al cargar perfil:', error);
      }
    }
    fetchPerfil();
  }, [id_alumno]);

  if (!alumno) return <p>Cargando perfil...</p>;

  return (
    <div className={styles.perfilContainer}>
      <div className={styles.header}>
        <h2>Mi perfil</h2>
        <button className={styles.closeButton} onClick={onClose}>❌</button>
      </div>
      <p><strong>Nombre:</strong> {alumno.nombre}</p>
      <p><strong>Apellido:</strong> {alumno.apellido}</p>
      <p><strong>Email:</strong> {alumno.email}</p>
    </div>
  );
}

export default PerfilAlumno;


