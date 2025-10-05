import React from 'react'

function Gallery() {
    const images = [
        ""
    ]
  return (
    <section style={{
        display: "flex", //usa flexbox para layout
        flexWrap: "wrap",//permite que las imagenes se ajusten a la seccion
        gap: "10px", //espacio entre las imagenes
        justifyContent: "center", //centra horizontalmente
        marginTop: "20px"//margen superior
    }}>
        {}
        {
            images.map((src, index) => (
                <img key={index} //identificador unico
                src={src}
                alt={`Imagen ${index + 1}`}
                style={{
                    width: "150px",
                    height: "150px"
                }}></img>
            ))
        }
    </section>
  )
}

export default Gallery