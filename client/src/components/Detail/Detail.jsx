// import './CardsCont.css'


const Detail = ({ id, nombre, imagen, types, vida, ataque, defensa, velocidad, altura, peso }) => {

    id.length > 30 ? types = types.map(typ => typ.name) : types = types.map(tip => tip);

    return (
        <div >

            <h2>detalle del pokemon {nombre}</h2>

            < img src={imagen} alt="" />
            <p>vida: {vida}</p>
            <p>ataque: {ataque}</p>
            <p>defensa: {defensa}</p>
            <p>velocidad: {velocidad}</p>
            <p>altura: {altura}</p>
            <p>peso: {peso}</p>
            <p>de tipo: {types}</p>
        </div>
    )
}

export default Detail;