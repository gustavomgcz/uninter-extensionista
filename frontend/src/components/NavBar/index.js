import './NavBar.css'
import { Link, useLocation } from 'react-router-dom'

function NavBar({ navlink, to, navfooter }) {

    const location = useLocation()

    return (
        <Link className={`${location.pathname === to ? 'active-link' : ''} link ${navfooter ? "footer-nav-links" : ""}`} to={to}>
            {navlink}
        </Link>
    )
}

export default NavBar