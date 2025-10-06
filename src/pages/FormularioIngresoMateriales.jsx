import { useState } from "react";
import '../styles/FormularioIngreso.css'

function FormularioIngresoMateriales({ onAdd }) {
  const [formData, setFormData] = useState({
    fecha: "",
    empresa: "",
    manifiesto: "",
    remito: "",
    totalKg: "",
    destruccionPorc: "",
    destruccionKg: "",
    chatarraPorc: "",
    chatarraKg: "",
    plasticoPorc: "",
    plasticoKg: "",
    cartonPorc: "",
    cartonKg: "",
    maderaPorc: "",
    maderaKg: "",
    basuraPorc: "",
    basuraKg: "",
    valorizacionEnergetica: "",
    kgOtros: "",
    comentarios: "",
    responsable: "",
    horaIngreso: "",
    horaSalida: "",
    transporte: "",
    foto: null
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Convertir los porcentajes a números (o 0 si están vacíos)
    const d = Number(formData.destruccionPorc) || 0;
    const c = Number(formData.chatarraPorc) || 0;
    const p = Number(formData.plasticoPorc) || 0;
    const ca = Number(formData.cartonPorc) || 0;
    const m = Number(formData.maderaPorc) || 0;
    const b = Number(formData.basuraPorc) || 0;

    const total = d + c + p + ca + m + b;

    if (total !== 100) {
      setError(`La suma de los porcentajes debe ser 100%. Actualmente es ${total}%.`);
      return;
    }

    setError("");
    onAdd(formData);

    setFormData({
      ...formData,
      empresa: "",
      manifiesto: "",
      totalKg: "",
      responsable: "",
      transporte: ""
    });
  };

  return (
    <form onSubmit={handleSubmit} className="ingreso-form">
      <h3>Nuevo Ingreso</h3>

      {error && <p className="error-msg">{error}</p>}

      <div className="form-grid">
        <label>Fecha</label>
        <input type="date" name="fecha" value={formData.fecha} onChange={handleChange} required />

        <label>Empresa</label>
        <input type="text" name="empresa" value={formData.empresa} onChange={handleChange} required />

        <label>Manifiesto</label>
        <input type="text" name="manifiesto" value={formData.manifiesto} onChange={handleChange} />

        <label>Remito Servicio</label>
        <input type="text" name="remito" value={formData.remito} onChange={handleChange} />

        <label>Total KG</label>
        <input type="number" name="totalKg" value={formData.totalKg} onChange={handleChange} />

        <label>Destrucción %</label>
        <input type="number" name="destruccionPorc" value={formData.destruccionPorc} onChange={handleChange} />

        <label>Chatarra %</label>
        <input type="number" name="chatarraPorc" value={formData.chatarraPorc} onChange={handleChange} />

        <label>Plástico %</label>
        <input type="number" name="plasticoPorc" value={formData.plasticoPorc} onChange={handleChange} />

        <label>Cartón %</label>
        <input type="number" name="cartonPorc" value={formData.cartonPorc} onChange={handleChange} />

        <label>Madera %</label>
        <input type="number" name="maderaPorc" value={formData.maderaPorc} onChange={handleChange} />

        <label>Basura %</label>
        <input type="number" name="basuraPorc" value={formData.basuraPorc} onChange={handleChange} />

        <label>Comentarios</label>
        <textarea name="comentarios" value={formData.comentarios} onChange={handleChange} />

        <label>Responsable</label>
        <input type="text" name="responsable" value={formData.responsable} onChange={handleChange} />

        <label>Hora Ingreso</label>
        <input type="time" name="horaIngreso" value={formData.horaIngreso} onChange={handleChange} />

        <label>Hora Salida</label>
        <input type="time" name="horaSalida" value={formData.horaSalida} onChange={handleChange} />

        <label>Transporte</label>
        <input type="text" name="transporte" value={formData.transporte} onChange={handleChange} />

        <label>Foto de la Descarga</label>
        <input type="file" name="foto" onChange={handleChange} />
      </div>

      <button type="submit">Guardar</button>
    </form>
  );
}

export default FormularioIngresoMateriales;
