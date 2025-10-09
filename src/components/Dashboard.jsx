import { useState } from "react";
import { Link, Routes, Route } from 'react-router-dom';
import Clientes from './Clientes';
import Logistica from './Logistica';
import ProgramacionViaje from './ProgramacionViaje';
import Viajes from './Viajes';
import "../styles/App.css";

function Dashboard({ user }) {
  const [logisticaOpen, setLogisticaOpen] = useState(false);

  const toggleLogistica = () => {
    setLogisticaOpen(!logisticaOpen);
  }

  const handleLogout = () => {
    window.location.href = '/login';
  }

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>Menú</h2>
        <ul>
          <li><Link to="/dashboard/clientes">Clientes</Link></li>

          <li className="dropdown">
            <span 
              className="dropdown-title" 
              onClick={toggleLogistica} 
              style={{ cursor: "pointer" }}
            >
              Logística ▾
            </span>

            {logisticaOpen && (
              <ul className="dropdown-menu">
                <li><Link to="/dashboard/logistica/viajes">Viajes</Link></li>
                <li><Link to="/dashboard/logistica/programacion">Programación de viajes</Link></li>
              </ul>
            )}
          </li>
        </ul>
      </aside>

      <main className="main-content">
        <header className="dashboard-header">
          <span>Hola, {user?.nombre}</span>
           <div className='av-login'><button onClick={handleLogout}>Logout</button>
            </div>
        </header>

        <section className="dashboard-body">
          <Routes>
            <Route path="clientes" element={<Clientes />} />
            <Route path="logistica" element={<Logistica />}>
              <Route path="viajes" element={<Viajes />} />
              <Route path="programacion" element={<ProgramacionViaje />} />
            </Route>
            <Route path="" element={<h3>Bienvenido al Dashboard</h3>} />
          </Routes>
        </section>
      </main>
    </div>
  )
}

export default Dashboard;
