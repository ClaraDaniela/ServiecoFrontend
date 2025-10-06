import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/TablaClientes.css"


function Clientes() {

  const [clientes, setClientes] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  
    useEffect(() => {
      fetch("https://68e3b5028e14f4523dae6271.mockapi.io/clientes")
        .then((respuesta) => respuesta.json())
        .then((datos) => {
          setClientes(datos);
          setCargando(false);
        })
        .catch((error) => {
          {console.error("Error!,", error)}
          setError("Hubo un problema al cargar los clientes.");
          setCargando(false);
        });
    }, []);
  
    if (cargando) return <p>Cargando clientes...</p>;
    if (error) return <p>{error}</p>;
  return (
    <table className= "table-clientes">
      <thead>
        <tr>
          <th>Código</th>
          <th>Nombre</th>
          <th>Razón Social</th>
          <th>CUIT</th>
          <th>Fecha Alta</th>
          <th>Estado</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {clientes.map((c) => (
          <tr key={c.id}>
            <td>{c.id}</td>
            <td>{c.nombre}</td>
            <td>{c.razon_social}</td>
            <td>{c.CUIT}</td>
            <td>{c.fecha_alta}</td>
            <td>{c.estado === 1 ? "Activo" : "Inactivo"}</td>
            <td>
              <button onClick={() => alert(`Detalles del cliente ${c.codigo}`)}>
                Ver más
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Clientes