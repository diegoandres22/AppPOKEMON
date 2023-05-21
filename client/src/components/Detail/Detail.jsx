import './Detail.css'

import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import { deletePokemon } from "../../redux/actions";


const Detail = ({ id, nombre, imagen, types, vida, ataque, defensa, velocidad, altura, peso }) => {

    id.length > 30 ? types = types.map(typ => typ.name) : types = types.map(tip => tip);

    const dispatch = useDispatch();

    const handleDelete = () => {

        dispatch(deletePokemon(id))

    }

    return (
        <div className="detailCont" >
            <div className="atrascont">
                <button className=' flechacont'>
                    <Link className='flecha' to='/home'> V </Link>
                </button>
            </div>
            <div className="imgtarget">



                < img src={imagen} alt="" />
                {id.length > 20 &&
                    <button onClick={handleDelete} >Eliminar Pokemon</button>}
            </div>
            <div className="targetimg">

                <div className="target">

                    <h2>detalle del pokemon {nombre}</h2>


                    <p>vida: {vida}</p>
                    <p>ataque: {ataque}</p>
                    <p>defensa: {defensa}</p>
                    <p>velocidad: {velocidad}</p>
                    <p>altura: {altura}</p>
                    <p>peso: {peso}</p>
                    <p>de tipo: {types}</p>


                </div>
            </div>

        </div>
    )
}

export default Detail;