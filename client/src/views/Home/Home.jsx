import './Home.css';

import CardsCont from "../../components/CardsCont/CardsCont";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemons, filterPokemons, orderPokemons, getByOrigin } from "../../redux/actions";
import Paginate from "../../components/Paginate/Paginate";


const Home = () => {

    const dispatch = useDispatch();

    const handleOrder = (event) => {
        dispatch(orderPokemons(event.target.value));
    }

    const handleOFilter = (event) => {
        dispatch(filterPokemons(event.target.value));
    }
    const handleOrigin = (event) => {
        dispatch(getByOrigin(event.target.value));
    }

    useEffect(() => {

        dispatch(getPokemons())

    }, []);



    return (
        <div className="homeCont">
            <div className="rabarra">
                <h1> POKEMONS </h1>
                <div className="filtAndOrd">
                    <p>Ver: </p>
                    <select className="listita" onChange={handleOrigin}>
                        <option className='toma' value="todos">Todos</option>
                        <option className='toma' value="base">Creados</option>
                        <option className='toma' value="api">Pokemones</option>
                    </select>

                    <p>Ordenar por: </p>
                    <select className="listita" onChange={handleOrder}>
                        <option className='toma' value="A">Ascendente</option>
                        <option className='toma' value="D">Descendente</option>
                    </select>
                    <select className="listita" onChange={handleOFilter}>
                        <option className='toma' value="normal">normal</option>
                        <option className='toma' value="fighting">fighting</option>
                        <option className='toma' value="flying">flying</option>
                        <option className='toma' value="poison">poison</option>
                        <option className='toma' value="ground">ground</option>
                        <option className='toma' value="rock">rock</option>
                        <option className='toma' value="bug">bug</option>
                        <option className='toma' value="ghost">ghost</option>
                        <option className='toma' value="steel">steel</option>
                        <option className='toma' value="fire">fire</option>
                        <option className='toma' value="water">water</option>
                        <option className='toma' value="grass">grass</option>
                        <option className='toma' value="electric">electric</option>
                        <option className='toma' value="psychic">psychic</option>
                        <option className='toma' value="ice">ice</option>
                        <option className='toma' value="fairy">fairy</option>
                    </select>
                </div>
            </div>
            <CardsCont />
            <div className="pagiCont">
                <Paginate />
            </div>

        </div>
    )
}

export default Home;