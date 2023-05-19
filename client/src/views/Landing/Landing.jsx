import './Landing.css';

import { Link } from "react-router-dom"

const Landing = () => {
    return (

        <div className='landinContent' >
            <div className="start">
                <p className='imgTitle' />

                <div className="data">
                    <h1 className='titulo fondi'>Todos los pokemones </h1>

                    <h3 className='fondi'>Acá podrás ver toda la información acerca de los pokemones que gustes, ordenarlos de mayor a menor ataque o vice versa y verlos por tipo. </h3>
                </div>

                <Link className='home' to="home"> Comenzar </Link>
            </div>
            <div className="end">

                <div className="fomr">
                    <p className='text'>Por que no le sacas mayor provecho? </p>
                    <div className="switch">
                        <p className='ing'>Ingresar </p>
                        <p className='reg'>Registrarme </p>
                    </div>
                    <div className="formu">
                        <label className='label'>Email</label>
                        <input type="text" />

                        <label className='label'>contraseña</label>
                        <input type="text" />

                        <b className='boton'>ingresar/registrarme</b>
                        
                    </div>
                    <p>Así podrás almacenar tus  pokemones favoritos, añadir pokemones, enterarte de las ultimas noticias acerca de este mundo y poder disfrutar de las futuras modificaciones de la plataforma!</p>
                </div>

            </div>
        </div>

    )
}

export default Landing;