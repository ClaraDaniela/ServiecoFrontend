function Tarjeta({nombre, area, imagen, botonTexto}) {
    return (
        <div className="tarjeta">
            <img src= {imagen} alt={nombre} className="tarjeta-imagen" />
            <h2>{nombre}</h2>
            <p>{area}</p>
            <button>{botonTexto}</button>            
        </div>
    )
} export default Tarjeta