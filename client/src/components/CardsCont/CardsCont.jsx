import './CardsCont.css'

import Card from "../Card/Card";
import { useSelector } from "react-redux";

const CardsCont = () => {

    const { pokemonsFyO, page } = useSelector(state => state);

    let desde = (page - 1) * 12;
    let hasta = page * 12;

    const viewsPokemons = pokemonsFyO?.slice(desde, hasta);

    return (
        <div className="cardCont">

            {viewsPokemons.map(poke => {
                return <Card
                    key={poke.id}
                    nombre={poke.nombre}
                    imagen={poke.imagen}
                    vida={poke.vida}
                    ataque={poke.ataque}
                    defensa={poke.defensa}
                    velocidad={poke.velocidad}
                    altura={poke.altura}
                    peso={poke.peso}
                    id={poke.id}
                    types={poke.types}
                />
            })}
           

        </div>
    )
}

export default CardsCont;