import { useState } from 'react';
import OffCanvas from 'react-aria-offcanvas';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
    }

    const handleClose = () => {
        setIsOpen(false);
    }

    return (
        <header className='header-container' id='home' >
            <p className='header-logo' >  Ayr<span>DS</span> </p>

            <nav className='nav' >
                <ul>
                    <li>
                        <a href='#sobreMi'>
                            Sobre Mi
                        </a>
                    </li>
                    <li>
                        <a href='#proyectos'>
                            Proyectos
                        </a>
                    </li>
                    <li>
                        <a href='#certificados'>
                            Certificados
                        </a>
                    </li>
                    <li>
                        <a href='#contacto'>
                            Contacto
                        </a>
                    </li>
                </ul>
            </nav>

            <button
                className="header-burger"
                id='menu-button'
                onClick={handleOpen}
            >
                <span className="burger" ></span>
                <span className="burger" ></span>
                <span className="burger" ></span>
            </button>

            <OffCanvas
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                labelledby="menu-button"
                position='right'
                height='100vh'
                width='65vw'
                className='slider-menu'
            >
                <nav className='nav-mobile' >
                    <ul>
                        <li onClick={handleClose} >
                            <a href='#sobreMi'>
                                Sobre Mi
                            </a>
                        </li>
                        <li onClick={handleClose} >
                            <a href='#proyectos'>
                                Proyectos
                            </a>
                        </li>
                        <li onClick={handleClose} >
                            <a href='#certificados'>
                                Certificados
                            </a>
                        </li>
                        <li onClick={handleClose} >
                            <a href='#contacto'>
                                Contacto
                            </a>
                        </li>
                    </ul>
                </nav>

                <button className='button-offcanvas' onClick={handleClose} >
                    <span className="burger-offcanvas span-1" ></span>
                    <span className="burger-offcanvas span-2" ></span>
                </button>
            </OffCanvas>
        </header>
    )
}

export default Navbar;