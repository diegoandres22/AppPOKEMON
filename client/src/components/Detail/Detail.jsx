import './Detail.css'

import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import { deletePokemon } from "../../redux/actions";
import { useEffect, useState } from 'react';


const Detail = ({ id, nombre, imagen, types, vida, ataque, defensa, velocidad, altura, peso }) => {

    // const [pokemon, setPokemon] = useState({
    //     nombre: nombre,
    //     imagen: imagen,
    //     vida: vida,
    //     ataque: ataque,
    //     defensa: defensa,
    //     velocidad: velocidad,
    //     altura: altura,
    //     peso: peso,
    //     tipos: [types]
    // });

    // useEffect(() => {
    // }, []);

    id?.length > 30
        ? types = types?.map(typ => typ.name)
        : types = types?.map(tip => tip);

    const dispatch = useDispatch();

    const handleDelete = () => {

        dispatch(deletePokemon(id))
        alert('Pokemon eliminado correctamente')
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
                {id?.length > 20 && <>
                    <Link className='flecha' to='/home'>
                        <button onClick={handleDelete} >Eliminar Pokemon</button>
                    </Link></>}
            </div>


            <div className="targetimg">

                <div className="target">

                    <h2>Detalle del pokemon {nombre}</h2>

                    <p>vida: {vida}</p>
                    <p>ataque: {ataque}</p>
                    <p>defensa: {defensa}</p>
                    <p>velocidad: {velocidad}</p>
                    <p>altura: {altura}</p>
                    <p>peso: {peso}</p>

                    <div className="tiposdetail">
                        <p>tipo:</p>
                        {types.map(tip => {
                            return (
                                <p className='tipdetail' >{tip}</p>
                            )
                        })}
                    </div>


                </div>
            </div>

        </div>
    )
}

export default Detail;