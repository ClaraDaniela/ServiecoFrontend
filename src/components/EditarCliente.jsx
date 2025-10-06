import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditarCliente = ({ cliente }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: cliente?.nombre || "",
    razon_social: cliente?.razon_social || "",
    descripcion: cliente?.descripcion || "",
    CUIT: cliente?.CUIT || "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3000/clientes/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Cliente actualizado correctamente");
        navigate(`/clientes/${id}`); // vuelve a los detalles del cliente
      } else {
        alert("Error al actualizar cliente");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Editar Cliente</h2>
      <label>Nombre:</label>
      <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />

      <label>Razón Social:</label>
      <input type="text" name="razon_social" value={formData.razon_social} onChange={handleChange} />

      <label>Descripción:</label>
      <input type="text" name="descripcion" value={formData.descripcion} onChange={handleChange} />

      <label>CUIT:</label>
      <input type="text" name="CUIT" value={formData.CUIT} onChange={handleChange} />

      <button type="submit">Guardar cambios</button>
    </form>
  );
};

export default EditarCliente;
