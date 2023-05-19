import './NavBar.css'

import { Link } from "react-router-dom"
import SearchBar from "./SearchBar/SearchBar";

const NavBar = () => {
    return (
        <nav className='nav'>

            <button className='botonSearch'>
                <Link className='btntext' to='/'> LOGO @ </Link>
            </button>

            <button className='botonSearch'>
                <Link className='btntext' to='/form'> Añadir </Link>
            </button>

            <SearchBar/>

            <button className='botonSearch'>
            <a href="">favoritos</a>
            </button>

            <button className='botonSearch'>
                <Link className='btntext' to='/'>INGRESAR</Link>
            </button>
        </nav>
    )
}

export default NavBar; 