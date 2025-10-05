import { Link, Routes, Route } from 'react-router-dom'
import Clientes from './Clientes'
import Logistica from './Logistica'

function Dashboard({ user }) {
  const handleLogout = () => {
    window.location.href = '/login' 
  }

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>Menú</h2>
        <ul>
          <li><Link to="clientes">Clientes</Link></li>
          <li><Link to="logistica">Logística</Link></li>
        </ul>
      </aside>

      <main className="main-content">
        <header className="dashboard-header">
          <span>Hola, {user?.nombre}</span>
          <button onClick={handleLogout}>Logout</button>
        </header>

        <section className="dashboard-body">
          <Routes>
            <Route path="clientes" element={<Clientes />} />
            <Route path="logistica" element={<Logistica />} />
            <Route path="" element={<h3>Bienvenido al Dashboard</h3>} />
          </Routes>
        </section>
      </main>
    </div>
  )
}

export default Dashboard
