import { useEffect, useRef } from 'react';
import { loadFull } from 'tsparticles';
import Particles from 'react-tsparticles';
import Typed from 'typed.js';
import me from '../assets/io.jpg';

const Home = () => {

    const element = useRef(null);

    useEffect(() => {
        const typed = new Typed(element.current, {
            strings: ['Desarrollador Front-end', 'Desarrollador Back-end', 'Desarrollador Full-stack'],
            startDelay: 300,
            typeSpeed: 50,
            backSpeed: 50,
            backDelay: 100,
            smartBackspace: true,
            showCursor: true
        });

        return () => {
            typed.destroy();
        }
    }, []);

    const particlesInit = async (main) => {

        await loadFull(main);
    }

    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
        <section className='home' >
            <Particles
                className='particles'
                id='particles'
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onHover: {
                                enable: true,
                                mode: 'grab'
                            },
                            onClick: {
                                enable: true,
                                mode: 'repulse'
                            },
                            resize: true
                        }
                    },
                    particles: {
                        move: {
                            direction: 'none',
                            enable: true,
                            speed: 2
                        },
                        links: {
                            color: '#79FE0C',
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1
                        },
                        collisions: {
                            enable: true
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 900
                            },
                            value: 100
                        },
                    },
                    detectRetina: true
                }}
            />

            <div className='home-info' >
                <img src={me} alt='Me' className='home-img' />

                <div className='home-welcome' >
                    <p className='home-p' >¡Bienvenido👋!</p>
                    <h1>Soy Ayrton Da Silva</h1>
                    <span ref={element} ></span>
                </div>
            </div>

        </section>
    )
}

export default Home;