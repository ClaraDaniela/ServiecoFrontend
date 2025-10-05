import { Link, useParams, useLocation } from "react-router-dom";

const DetalleProducto = ({carrito, setCarrito}) => {
 
    const { id } = useParams();
    const location = useLocation();
    const producto = location.state?.producto;
 
if (!producto) {
    return (
      <div>
        <p>No se pudo cargar el producto</p>
        <Link to="/productos">
          <button>Volver a Productos</button>
        </Link>
      </div>
    );
  }

  
  const agregarAlCarrito = () => {
    setCarrito([...carrito, producto]);
    alert(`${producto.nombre} agregado al carrito!`);
  };
  return(
    <>
    <h2>Detalles del Producto {id}</h2>
    <ul>
        <li key={producto.id}>
            {producto.nombre}
            <br />
            <p><strong>Descripción: </strong>{producto.descripcion}</p>
            <p>Precio: ${producto.precio}</p>
            <img src={producto.avatar} alt={producto.nombre} width="30%" />
        </li>
        <hr />
        <button onClick={agregarAlCarrito}>Agregar al carrito</button>
        <Link to={`/productos`}><button>Volver</button></Link>
    </ul>
    </>
  );
}; export default DetalleProducto;