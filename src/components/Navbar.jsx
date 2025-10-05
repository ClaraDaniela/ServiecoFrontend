import { Link } from 'react-router-dom'
import "../styles/Navbar.css"

function Navbar({ isLogged, setIsLogged }) {
    const handleLogout = () => setIsLogged(false)

    return (
        <nav className='navbar'>
            <ul className='nav-links'>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/servicios">Servicios</Link></li>
                <li><Link to="/productos">Productos</Link></li>
                <li><Link to="/equipo">Equipo</Link></li>
                <li><Link to="/carrito">Carrito</Link></li>
            </ul>

            <div className='av-login'>
                {isLogged ? (<button onClick={handleLogout}>Logout</button>)
                    : (<Link to="/login"><button>Login</button></Link>)}
            </div>
        </nav>
    )
}

export default Navbar