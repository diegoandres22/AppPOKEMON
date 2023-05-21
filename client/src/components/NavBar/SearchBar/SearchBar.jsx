import "./SearchBar.css"

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
        <div className='searcont'>
            <input className='searbar' onChange={handleChange} type='text' value={poke} placeholder='Buscar por nombre' />

            {poke.length > 0 && <Link className="searcontbut" to={`/detailbyname`}>
                <button className='searbut' onClick={() => { handlePoke(poke); setPoke('') }}  ></button>
            </Link>}


        </div>
    );
}

export default SearchBar;