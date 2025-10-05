import React, { useState } from 'react'
import Inicio from './components/Inicio'
import Servicios from './components/Servicios'
import Navbar from './components/Navbar'
import Productos from './components/Productos'
import DetalleProducto from './components/DetalleProducto'
import Footer from './components/Footer'
import Login from './components/Login'
import Carrito from './components/Carrito'
import Equipo from './components/Equipo'
import Dashboard from './components/Dashboard'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import "./styles/App.css"

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [carrito, setCarrito] =useState([]);
  const [user, setUser] = useState(null);
  const location = useLocation();
  const mostrarNavbar = location.pathname !== '/dashboard';


  
  const eliminarDelCarrito = (productoId) => {
    setCarrito(carrito.filter((item, index) => index !== productoId));
  };

  return (
    <div>
      {mostrarNavbar && <Navbar isLogged = {isLogged} setIsLogged = {setIsLogged} />}
      
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/servicios' element={<Servicios />} />
        <Route path='/productos' element={<Productos />} />
        <Route path='/equipo' element={<Equipo />} />
        <Route path="/productos/:id"
         element={<DetalleProducto carrito={carrito} setCarrito={setCarrito} />}/>
        <Route path="/carrito" element={isLogged ? (
         <Carrito carrito={carrito} eliminarDelCarrito={eliminarDelCarrito} />) : (
         <Navigate to="/login" state={{ aviso: "Debe estar logeado para ver el carrito" }} />)}/>
        <Route path='/login' element={<Login setIsLogged={setIsLogged} setUser={setUser} />} />
        <Route path="/dashboard/*" element={isLogged ? (
         <Dashboard user={user}/>) : (
         <Navigate to="/login" state={{ aviso: "Debe iniciar sesión" }} />)}/>               
      </Routes>
      <Footer />
    </div>
  )     
  
}

export default App