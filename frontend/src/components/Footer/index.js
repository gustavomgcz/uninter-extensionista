import NavBar from 'components/NavBar';
import './Footer.css'
import { GrInstagram, GrFacebookOption, GrYoutube } from "react-icons/gr";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className='footer container'>
            <div className='footer-info'>
                <div>
                    <h2>Onde ficamos</h2>
                    <p className='text-contact'>
                        Endereço: R. Francisco Antônio da Silva, 478
                    </p>
                    <p className='text-contact'>
                        Vila Formosa, Campinas - SP, 13045-025
                    </p>
                    <p className='text-contact'>
                         <a href="+551933270797">+55 19 3327-0797</a>
                    </p>
                </div>
                <div>
                    <h2>Redes Sociais</h2>
                    <div className='footer-icons'>
                        <Link to="https://www.instagram.com/ipvilaformosa/" target='_blank' rel="noopener noreferrer">
                            <GrInstagram />
                        </Link>
                        <Link to="https://www.facebook.com/ipvilaformosa/" target='_blank' rel="noopener noreferrer">
                            <GrFacebookOption />
                        </Link>
                        <Link to="https://www.youtube.com/@igrejapresbiterianavilafor3381/" target='_blank' rel="noopener noreferrer">
                            <GrYoutube />
                        </Link>
                    </div>
                </div>
                <div>
                    <h2>Precisa de Ajuda?</h2>
                    <div className='footer-nav'>
                        <NavBar navfooter='footer-nav-links' to="/" navlink="Home" />
                        <NavBar navfooter='footer-nav-links' to="/acoes" navlink="Ações" />
                        <NavBar navfooter='footer-nav-links' to="/contato" navlink="Contato" />
                    </div>
                </div>
            </div>
            <p className='made-by'>
                Desenvolvido por <Link to="https://www.linkedin.com/in/gustavo-magalhaes-cezar-a120ba121/" target='_blank'>Gustavo Magalhaes</Link>
            </p>
        </footer>
    )
}

export default Footer