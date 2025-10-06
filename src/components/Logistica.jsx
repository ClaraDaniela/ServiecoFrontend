import { Outlet } from "react-router-dom";

function Logistica() {
  return (
    <div>
      <h2>Sección Logística</h2>
      <Outlet /> {/* 👈 acá se van a mostrar Viajes o ProgramacionViaje */}
    </div>
  );
}

export default Logistica;
