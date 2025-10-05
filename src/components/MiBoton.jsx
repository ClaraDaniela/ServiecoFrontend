function MiBoton({texto, color}) {
    const estilo = {
        backgroundColor: color,
        color: 'white',
        padding:'10px 20px',
        margin: '10px'
    }
    return (
        <button style={estilo}>{texto}</button>
    )
} export {MiBoton}