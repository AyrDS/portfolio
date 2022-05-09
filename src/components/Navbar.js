
const Navbar = () => {
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
                        <a href='#contacto'>
                            Contacto
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;