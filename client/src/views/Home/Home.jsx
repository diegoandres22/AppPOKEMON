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
                        <option value="todos">Todos</option>
                        <option value="base">Creados</option>
                        <option value="api">Pokemones</option>
                    </select>

                    <p>Ordenar por: </p>
                    <select className="listita" onChange={handleOrder}>
                        <option value="A">Ascendente</option>
                        <option value="D">Descendente</option>
                    </select>
                    <select className="listita" onChange={handleOFilter}>
                        <option value="normal">normal</option>
                        <option value="fighting">fighting</option>
                        <option value="flying">flying</option>
                        <option value="poison">poison</option>
                        <option value="ground">ground</option>
                        <option value="rock">rock</option>
                        <option value="bug">bug</option>
                        <option value="ghost">ghost</option>
                        <option value="steel">steel</option>
                        <option value="fire">fire</option>
                        <option value="water">water</option>
                        <option value="grass">grass</option>
                        <option value="electric">electric</option>
                        <option value="psychic">psychic</option>
                        <option value="ice">ice</option>
                        <option value="fairy">fairy</option>
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