import "../styles/Viajes.css";
import { useState, useRef } from "react";

function Viajes() {
  const viajes = [
    { id: 1, origen: "Ciudad A", destino: "Ciudad B", chofer: "Juan Pérez", vehiculo: "Toyota Corolla", enganche: 1000, servicio: "Transporte de Carga", estado: 1 },
    { id: 2, origen: "Ciudad C", destino: "Ciudad D", chofer: "Ana Gómez", vehiculo: "Ford F-150", enganche: 2000, servicio: "Carga pesada", estado: 0 },
    { id: 3, origen: "Ciudad E", destino: "Ciudad F", chofer: "Luis Martínez", vehiculo: "Mercedes Sprinter", enganche: 1500, servicio: "Paquetería", estado: 1 },
    { id: 4, origen: "Ciudad G", destino: "Ciudad H", chofer: "Sofía Ruiz", vehiculo: "Volkswagen Amarok", enganche: 1200, servicio: "Transporte especial", estado: 1 }
  ];

  const ITEM_WEIGHT = 200; 
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef();

  const handleScroll = (amount) => {
    const container = containerRef.current;
    if (!container) return;

    let newPos = scrollPosition + amount;

    // Limitar scroll al rango de la tabla
    if (newPos < 0) newPos = 0;
    if (newPos > container.scrollWidth - container.clientWidth) newPos = container.scrollWidth - container.clientWidth;

    setScrollPosition(newPos);
    container.scrollLeft = newPos;
  };

  return (
    <div className="viajes-contenedor">
      <h2>Balance de masas</h2>

      <div className="tabla-scroll" ref={containerRef}>
        <table className="table-viajes">
          <thead>
            <tr>
              <th>ID</th>
              <th>Origen</th>
              <th>Destino</th>
              <th>Chofer</th>
              <th>Vehículo</th>
              <th>Enganche</th>
              <th>Servicio</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {viajes.map((v) => (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>{v.origen}</td>
                <td>{v.destino}</td>
                <td>{v.chofer}</td>
                <td>{v.vehiculo}</td>
                <td>{v.enganche}</td>
                <td>{v.servicio}</td>
                <td>{v.estado === 1 ? "Activo" : "Inactivo"}</td>
                <td>
                  <button onClick={() => alert(`Detalles del viaje ${v.id}`)}>Ver más</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="acciones-btns">
        <button onClick={() => handleScroll(-ITEM_WEIGHT)}>◀ Scroll Left</button>
        <button onClick={() => handleScroll(ITEM_WEIGHT)}>Scroll Right ▶</button>
      </div>
    </div>
  );
}

export default Viajes;
