
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonByName } from "../../../redux/actions";

const SearchBar = () => {

    const dispatch = useDispatch();
    const [poke, setPoke] = useState("");

    const handleChange = (event) => {
        setPoke(event.target.value)
    }
    const handlePoke = (poke) => {
        dispatch(getPokemonByName(poke))
    }

    return (
        <div className=''>
            <input className=' ' onChange={handleChange} type='text' value={poke} placeholder='Buscar por nombre' />

            <Link to={`/detailbyname`}>
                <button onClick={() => { handlePoke(poke); setPoke('') }} className="" >Buscar</button>
            </Link>

        </div>
    );
}

export default SearchBar;