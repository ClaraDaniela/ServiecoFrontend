import { Link } from 'react-router-dom';
import "../styles/Carrito.css"


const Carrito = ({carrito, eliminarDelCarrito}) => {
    const total = carrito.reduce((acc, item) => acc + Number(item.precio), 0);

    if(carrito.length === 0) {
        return (
            <div>
                <h2>Carrito vacio</h2>
                <Link to="/productos"><button>Volver a Productos</button></Link>
            </div>          
                               
        )
        
    }

    return (
      <div id="contenedor-tarjetas">
        <h3>Carrito de compras</h3>
        <ul className='tarjeta-prod'>
          {carrito.map((producto, index) => (
            <li key={index}>
              {producto.nombre}: ${Number(producto.precio).toFixed(2)}
              <button onClick={() => eliminarDelCarrito(index)}>Eliminar</button>
            </li>
          ))}          
        </ul>
        <h2>=============================</h2>
        <h3>Total: ${total.toFixed(2)}</h3>       
        <Link to="/productos"><button>Seguir comprando</button></Link>
        
      </div>
    );

  }; export default Carrito;