import { useState, useEffect } from "react";
import axios from "axios";
import styles from "../styles/ClasesReservadas.module.css";

const ClasesReservadas = () => {
  const [loading, setLoading] = useState(true);
  const [clases, setClases] = useState([]);
  const [error, setError] = useState("");

  const id_alumno = parseInt(localStorage.getItem("id_alumno"), 10); // ✅ asegurate que esté acá
  console.log("🎓 ID leído desde localStorage:", id_alumno);

  useEffect(() => {
    if (!id_alumno) {
      setError("No se encontró el alumno. Iniciá sesión nuevamente.");
      setLoading(false);
      return;
    }

    axios
      .get(`http://localhost:3000/api/reservas/${id_alumno}`)
      .then((res) => {
        console.log("📥 Datos recibidos:", res.data);
        setClases(Array.isArray(res.data) ? res.data : [res.data]);
      })
      .catch((err) => {
        console.error(err);
        setError(err.response?.data?.message || "Error al obtener las clases");
      })
      .finally(() => setLoading(false));
  }, [id_alumno]);

  console.log("📦 Clases en el estado:", clases);

  return (
    <section className={styles.holder}>
      {loading ? (
        <p>Cargando clases...</p>
      ) : error ? (
        <p>{error}</p>
      ) : clases.length === 0 ? (
        <p>No tenés clases reservadas.</p>
      ) : (
        <ul className={styles.listaClases}>
          {clases.map((clase) => (
            <li key={clase.id_inscripcion} className={styles.itemClase}>
              <strong>Día:</strong> {clase.dia} &nbsp;|&nbsp;
              <strong>Hora:</strong> {clase.hora} &nbsp;|&nbsp;
              <strong>Profesor:</strong> {clase.profesor}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default ClasesReservadas;


