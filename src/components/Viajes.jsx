import "../styles/Viajes.css"


function Viajes() {
    const viajes = [
        { 
            id: 1,
            origen: "Ciudad A",
            destino: "Ciudad B",
            chofer: "Juan Pérez",
            vehiculo: "Toyota Corolla",
            enganche: 1000,
            servicio: "Transporte de Carga",
            estado: 1
        }
    ]

  return (
    <table className= "table-viajes">
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
              <button onClick={() => alert(`Detalles del viaje ${v.id}`)}>
                Ver más
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Viajes;