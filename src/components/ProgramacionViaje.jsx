import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/ProgramacionViaje.css";

function ProgramacionViaje() {
  const [viajes, setViajes] = useState([
    {
      id: 1,
      origen: "Buenos Aires",
      destino: "Rosario",
      chofer: "Juan Pérez",
      vehiculo: "Camión 123",
      enganche: "Remolque 45",
      servicio: "Carga general",
      estado: "En curso",
      fecha: "2025-10-07",
      hora: "08:00",
    },
  ]);

  const [nuevoViaje, setNuevoViaje] = useState({
    origen: "",
    destino: "",
    chofer: "",
    vehiculo: "",
    enganche: "",
    servicio: "",
    estado: "",
    fecha: "",
    hora: "",
  });

  const handleChange = (e) => {
    setNuevoViaje({ ...nuevoViaje, [e.target.name]: e.target.value });
  };

  const agregarViaje = () => {
    if (!nuevoViaje.origen || !nuevoViaje.destino)
      return alert("Completa los campos requeridos");

    setViajes([...viajes, { ...nuevoViaje, id: Date.now() }]);
    setNuevoViaje({
      origen: "",
      destino: "",
      chofer: "",
      vehiculo: "",
      enganche: "",
      servicio: "",
      estado: "",
      fecha: "",
      hora: "",
    });
  };

  const eliminarViaje = (id) => {
    setViajes(viajes.filter((v) => v.id !== id));
  };

  return (
    <div className="programacion-container">
      <h2>Programación de Viajes</h2>

      {/* Formulario para agregar nuevo viaje */}
      <div className="form-nuevo-viaje">
        <input
          type="text"
          name="origen"
          placeholder="Origen"
          value={nuevoViaje.origen}
          onChange={handleChange}
        />
        <input
          type="text"
          name="destino"
          placeholder="Destino"
          value={nuevoViaje.destino}
          onChange={handleChange}
        />
        <input
          type="text"
          name="chofer"
          placeholder="Chofer"
          value={nuevoViaje.chofer}
          onChange={handleChange}
        />
        <input
          type="text"
          name="vehiculo"
          placeholder="Vehículo"
          value={nuevoViaje.vehiculo}
          onChange={handleChange}
        />
        <input
          type="text"
          name="enganche"
          placeholder="Enganche"
          value={nuevoViaje.enganche}
          onChange={handleChange}
        />
        <input
          type="text"
          name="servicio"
          placeholder="Servicio"
          value={nuevoViaje.servicio}
          onChange={handleChange}
        />
        <input
          type="text"
          name="estado"
          placeholder="Estado"
          value={nuevoViaje.estado}
          onChange={handleChange}
        />
        <input
          type="date"
          name="fecha"
          value={nuevoViaje.fecha}
          onChange={handleChange}
        />
        <input
          type="time"
          name="hora"
          value={nuevoViaje.hora}
          onChange={handleChange}
        />
        <button className="btn-agregar" onClick={agregarViaje}>
          Agregar Viaje
        </button>
      </div>

      {/* Contenedor de tarjetas */}
      <div className="contenedor-tarjetas">
        {viajes.map((v) => (
          <div key={v.id} className="tarjeta">
            <h3>
              {v.origen} → {v.destino}
            </h3>
            <p><strong>Chofer:</strong> {v.chofer}</p>
            <p><strong>Vehículo:</strong> {v.vehiculo}</p>
            <p><strong>Enganche:</strong> {v.enganche}</p>
            <p><strong>Servicio:</strong> {v.servicio}</p>
            <p><strong>Estado:</strong> {v.estado}</p>
            <p><strong>Fecha:</strong> {v.fecha}</p>
            <p><strong>Hora:</strong> {v.hora}</p>
            <button className="btn-eliminar" onClick={() => eliminarViaje(v.id)}>
              🗑 Eliminar
            </button>
            <button className="btn-editar" onClick={() => editarViaje(v.id)}>
              ✏️ Editar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProgramacionViaje;
