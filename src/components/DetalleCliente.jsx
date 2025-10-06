import { Link, useParams, useLocation } from "react-router-dom";

const DetalleCliente = ({cliente}) => {
 
    const { id } = useParams();
    const location = useLocation();
    const cliente = location.state?.cliente;
 
if (!cliente) {
    return (
      <div>
        <p>No se pudo cargar los datos del cliente</p>
        <Link to="/clientes">
          <button>Volver a Clientes</button>
        </Link>
      </div>
    );
  }
const eliminarCliente = async () => {
  const confirmacion = window.confirm("¿Seguro que deseas eliminar este cliente?");
  if (!confirmacion) return;

  try {
    const response = await fetch(`http://localhost:3000/clientes/${cliente.id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      alert("Cliente eliminado con éxito");
      window.location.href = "/clientes";
    } else {
      alert("Error al eliminar el cliente");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Ocurrió un error en la conexión");
  }
};

const editarCliente = async () => {
  if (!confirmacion) return;

  try {
    const response = await fetch(`http://localhost:3000/clientes/${cliente.id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      alert("Cliente eliminado con éxito");
      window.location.href = "/clientes";
    } else {
      alert("Error al eliminar el cliente");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Ocurrió un error en la conexión");
  }
};

  return(
    <>
    <h2>Datos del cliente {id}</h2>
    <ul>
        <li key={cliente.id}>
            {cliente.nombre}
            <br />
            <p><strong>Descripción: </strong>{cliente.descripcion}</p>
            <p>Razon social: ${cliente.razon_social}</p>
        </li>
        <hr />
        <button onClick={editarCliente}>Editar</button>
        <button onClick={eliminarCliente}>Eliminar</button>
        <Link to={`/clientes`}><button>Volver</button></Link>
    </ul>
    </>
  );
}; export default DetalleCliente;