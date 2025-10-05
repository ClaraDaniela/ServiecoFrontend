import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Productos.css"

export default function Productos() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://68d482e3214be68f8c696ae2.mockapi.io/api/productos")
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setProductos(datos);
        setCargando(false);
      })
      .catch((error) => {
        {console.error("Error!,", error)}
        setError("Hubo un problema al cargar los productos.");
        setCargando(false);
      });
  }, []);

  if (cargando) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="productos-contenedor">
      {productos.map((producto) => (
        <li key={producto.id} className="producto-card">
        <h2>{producto.nombre}</h2>
          <br />
          Descripción: {producto.descripcion}
          <br />
          Precio: ${producto.precio}
          <br />
          <img src={producto.avatar} alt={producto.nombre} width="80%" className="producto-imagen"/>
          <Link to={`/productos/${producto.id}`} state={{producto}}><button>Más detalles</button></Link>
        </li>
          
      ))}
    </div>
  );
}