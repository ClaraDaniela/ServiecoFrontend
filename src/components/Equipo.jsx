import "../styles/Equipo.css"
import Tarjeta from "./Tarjeta"
import { Link } from "react-router-dom"
function Equipo() {
    const equipo = [
        {id: 1, nombre: 'Nicolas', area: 'Jefazo', imagen: '/img/sinfoto.jpeg'},
        {id: 2, nombre: 'Luciano', area: 'Gestión Área Administración', imagen: '/img/sinfoto.jpeg'},
        {id: 3, nombre: 'Tati', area: 'proveedores', imagen: '/img/sinfoto.jpeg'},
        {id: 4, nombre: 'Joni', area: 'seguridad e higiene', imagen: '/img/sinfoto.jpeg'},
        {id: 5, nombre: 'Gime', area: 'porteria', imagen: '/img/Gime.jpeg'},
        {id: 6, nombre: 'Ceci', area: 'logistica', imagen: '/img/sinfoto.jpeg'},
        {id: 7, nombre: 'Rocio', area: 'Diseño industrial', imagen: '/img/Rocio.jpeg'},
        {id: 8, nombre: 'Marcelo', area: 'Gestión Área Logística', imagen: '/img/sinfoto.jpeg'},
        {id: 9, nombre: 'Flor', area: 'RRHH', imagen: '/img/sinfoto.jpeg'},       
        {id: 10, nombre: 'Nico', area: 'facturacion', imagen: '/img/Nico.jpeg'},
        {id: 11, nombre: 'Vero', area: 'cobranzas', imagen: '/img/Vero.jpeg'},
        {id: 12, nombre: 'Herni', area: 'Control', imagen: '/img/Herni.jpeg'},
        {id: 13, nombre: 'Yo', area: 'Sistemas', imagen: '/img/Yo.jpeg'}
    ]

  return (
      <>
      <h1 className='titulito'> Equipo de Servieco</h1>
      <hr></hr>

            <div className='contenedor-tarjetas'>
              {equipo.map((persona) => (
              <div key={persona.id} className='tarjetita'>
              <Tarjeta
                nombre = {persona.nombre}
                area= {persona.area}  
                imagen= {persona.imagen}
              />
            </div>
              ))}
              <Link to="/"><button>Volver al Inicio</button></Link>
            </div>
            </>
  )
}

export default Equipo