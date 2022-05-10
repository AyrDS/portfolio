import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faB, faHeart } from '@fortawesome/free-solid-svg-icons';

library.add(faB, faHeart);

const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <footer className='footer' >
            <p>
                Hecho con <FontAwesomeIcon icon="fa-solid fa-heart" />
            </p>
            <p> Todos los derechos reservados AyrDS. {year} &copy; </p>
        </footer>
    )
}

export default Footer;