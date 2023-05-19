

import View from '../../components/View/View'
import { useSelector } from "react-redux";

const ViewPoke = () => {

    const { aPokemon } = useSelector(state => state);
    console.log(aPokemon);
    return (
        <div>
            <h1>detalle por nombre</h1>

            < View
                key={aPokemon?.id}
                nombre={aPokemon?.nombre}
                imagen={aPokemon?.imagen}
                vida={aPokemon?.vida}
                ataque={aPokemon?.ataque}
                defensa={aPokemon?.defensa}
                velocidad={aPokemon?.velocidad}
                altura={aPokemon?.altura}
                peso={aPokemon?.peso}
                id={aPokemon?.id}
                types={aPokemon?.tipos} />

        </div>

    )
}

export default ViewPoke;
