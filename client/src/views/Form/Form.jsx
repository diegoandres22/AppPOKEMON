import "./Form.css"

import { Link } from "react-router-dom"
import { useState } from "react";
import Validation from './../../components/Validations/Validations'
import { useDispatch } from "react-redux";

import { postPokemon, getPokemons } from "../../redux/actions";

const Form = () => {

    const dispatch = useDispatch();

    const [errors, setErrors] = useState({})

    const [newPokemon, setNewPokemon] = useState({
        nombre: '',
        imagen: '',
        vida: '',
        ataque: '',
        defensa: '',
        velocidad: '',
        altura: '',
        peso: '',
        tipos: []

    });

    const handleChange = (event) => {

        setNewPokemon({
            ...newPokemon,
            [event.target.name]: event.target.value
        })
        setErrors(Validation({

            ...newPokemon,
            [event.target.name]: event.target.value
        }))
    }
    const handleSubmit = (event) => {

        event.preventDefault();
        dispatch(postPokemon(newPokemon))
        dispatch(getPokemons())

    }
    function handleTypes(event) {
        setNewPokemon({
            ...newPokemon,
            tipos: [...newPokemon.tipos, event.target.value]
        });
    };


    return (
        <>
            <div className="detailCont" >

                <div className="atrascont">
                    <button className=' flechacont'>
                        <Link className='flecha' to='/home'> V </Link>
                    </button>
                    <h3>Créa un pokemon </h3>
                    <p>con las características que gustes </p>
                </div>

                <div className="imgtarget">
                    <label className={newPokemon.imagen} htmlFor="imagen">Url de imagen</label>
                    <input onChange={handleChange} type="text" name="imagen" />
                    <p>Preferiblemente escoge una imagen con fondo transparente</p>

                    {/* <select name="tipos"  multiple="multiple">
                        <option > Seleccionar tipo...</option>

                    </select> */}
                </div>


                <form className="targetimg" onSubmit={handleSubmit}>

                    <div className="target">

                        <div className="nombrecont">
                            <label htmlFor="nombre">Nombre</label>
                            <input onChange={handleChange} type="text" name="nombre" value={newPokemon.nombre} /></div>
                        {errors.nombre && <p className="error">{errors.nombre}</p>}

                        <div className="vidacont">
                            <label htmlFor="vida">Vida</label>
                            <input onChange={handleChange} type="text" name="vida" value={newPokemon.vida} /></div>
                        {errors.vida && <p className="error">{errors.vida}</p>}

                        <div className="ataquecont">
                            <label htmlFor="ataque">Ataque</label>
                            <input onChange={handleChange} type="text" name="ataque" value={newPokemon.ataque} /></div>
                        {errors.ataque && <p className="error">{errors.ataque}</p>}

                        <div className="defensacont">
                            <label htmlFor="defensa">Defensa</label>
                            <input onChange={handleChange} type="text" name="defensa" value={newPokemon.defensa} /></div>
                        {errors.defensa && <p className="error">{errors.defensa}</p>}

                        <div className="velocidadcont">
                            <label htmlFor="velocidad">Velocidad</label>
                            <input onChange={handleChange} type="text" name="velocidad" value={newPokemon.velocidad} /></div>
                        {errors.velocidad && <p className="error">{errors.velocidad}</p>}

                        <div className="alturacont">
                            <label htmlFor="altura">Altura</label>
                            <input onChange={handleChange} type="text" name="altura" value={newPokemon.altura} /></div>
                        {errors.altura && <p className="error">{errors.altura}</p>}

                        <div className="pesocont">
                            <label htmlFor="peso">Peso</label>
                            <input onChange={handleChange} type="text" name="peso" value={newPokemon.peso} /></div>
                        {errors.peso && <p className="error">{errors.peso}</p>}


                        <div className="tipos cont">
                            <label htmlFor="tipos">normal</label>
                            <input name="tipos" type="checkbox" value="7ca6612a-a2aa-405d-8b8a-91930cdf347e" onChange={handleTypes} />

                            <label htmlFor="tipos">fighting</label>
                            <input name="tipos" type="checkbox" value="0c1ae792-68e4-40cc-aa1d-b935a115884d" onChange={handleTypes} />

                            <label htmlFor="tipos">flying</label>
                            <input name="tipos" type="checkbox" value="44b11141-949a-4393-b5d0-fdd5c0f1f0e2" onChange={handleTypes} />

                            <label htmlFor="tipos">poison</label>
                            <input name="tipos" type="checkbox" value="d4194ea7-9355-43bd-9664-b08b81e76ef8" onChange={handleTypes} />

                            <label htmlFor="tipos">ground</label>
                            <input name="tipos" type="checkbox" value="8a25c753-1910-44c3-b648-58361419891e" onChange={handleTypes} />

                            <label htmlFor="tipos">rock</label>
                            <input name="tipos" type="checkbox" value="2b8f4b67-ef87-40b0-838a-fdb87e0b5fae" onChange={handleTypes} />

                            <label htmlFor="tipos">bug</label>
                            <input name="tipos" type="checkbox" value="b191554e-a3f3-4f63-b147-0eedf3ccfeb4" onChange={handleTypes} />

                            <label htmlFor="tipos">ghost</label>
                            <input name="tipos" type="checkbox" value="8d8ab285-778b-4aea-a6d7-68d32a21164a" onChange={handleTypes} />

                            <label htmlFor="tipos">steel</label>
                            <input name="tipos" type="checkbox" value="c9b68db9-0a38-4203-8576-d53d47274401" onChange={handleTypes} />

                            <label htmlFor="tipos">fire</label>
                            <input name="tipos" type="checkbox" value="b60a151e-4a62-4f01-b9d7-4cfff66c3ed4" onChange={handleTypes} />

                            <label htmlFor="tipos">water</label>
                            <input name="tipos" type="checkbox" value="efdece09-6c2b-4ff1-a57d-b96b7d9ce93a" onChange={handleTypes} />

                            <label htmlFor="tipos">grass</label>
                            <input name="tipos" type="checkbox" value="b30255a2-7200-4cdb-a2e4-c21c58a8f649" onChange={handleTypes} />

                            <label htmlFor="tipos">electric</label>
                            <input name="tipos" type="checkbox" value="797fe712-2941-46bf-b9d2-957d8dfb5127" onChange={handleTypes} />

                            <label htmlFor="tipos">psychic</label>
                            <input name="tipos" type="checkbox" value="7014fb55-ce1e-460a-8b47-398702256c6a" onChange={handleTypes} />

                            <label htmlFor="tipos">ice</label>
                            <input name="tipos" type="checkbox" value="e77541c9-fcc5-4b71-9e44-d08c338f858c" onChange={handleTypes} />

                            <label htmlFor="tipos">fairy</label>
                            <input name="tipos" type="checkbox" value="03545504-3b1f-47d8-94a1-2ce44bdaea58" onChange={handleTypes} />


                        </div>
                        {errors.tipos && <p className="error">{errors.tipos}</p>}




                        <button className="crear" disabled={!newPokemon.nombre || !newPokemon.vida || newPokemon.tipos.length < 1 || errors.nombre || errors.vida || errors.ataque || errors.defensa}> </button>

                    </div>
                </form>

            </div>

        </>
    )
}

export default Form;
