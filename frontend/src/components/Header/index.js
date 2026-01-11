import NavBar from '../NavBar'
import './Header.css'
import logo from '../../assets/img/logo.png'
import { Link } from 'react-router-dom'

function Header() {

    return (
        <header className='container'>
            <Link to="/">
                <img src={logo} alt='Logo Igreja Presbiteriana Vila Formosa' className='logo' />
            </Link>
            <nav className='navigation'>
                <NavBar to="/" navlink="Home" />
                <NavBar to="/acoes" navlink="Ações" />
                <NavBar to="/contato" navlink="Contato" />
            </nav>
        </header>
    )
}

export default Header