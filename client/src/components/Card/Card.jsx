import './Card.css';

import { Link } from 'react-router-dom';

const Card = ({ id, nombre, imagen, types}) => {

    {
        id.length > 30 ? types = types.map(typ => typ.name) : types = types.map(tip => tip);

        return (
            <Link className="linkcarta" to= {`/detail/${id}`}>
                <div className="carta">

                    <b className='titleCart'> {nombre} </b>
                    <img className='imgCart' src={imagen} alt="" />
                    <p> tipo: {types} </p>

                </div>
            </Link>
        )
    }
}

export default Card;