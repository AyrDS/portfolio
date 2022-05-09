import cv from '../assets/CV-AyrtonDaSilva.pdf';
import { skills } from '../db/db';


const AboutMe = () => {

    const years = (new Date().getFullYear()) - 1997;

    return (
        <section className='aboutMe' id='sobreMi' >
            <div className='aboutMe-info' >
                <h2>Sobre Mi</h2>
                <p className='aboutMe-info_cuestion' >¿Quien Soy?</p>
                <p className='aboutMe-info_cuestion' >Soy Ayrton Da Silva, desarrollador Full-stack.</p>
                <p className='aboutMe-info_bio'>Tengo {years} años y soy de Buenos Aires, Argentina</p>
                <p className='aboutMe-info_bio'>
                    Me considero una persona muy apasionada por el ámbito de la programación y que posee la capacidad de aprender muy rápido. Constantemente me gusta aprender nuevas tecnologías, mejorar mis habilidades y estar actualizado en las últimas tendencias del desarrollo.
                </p>
                <a
                    href={cv}
                    download='CV-AyrtonDaSilva'
                    className='aboutMe-info_btnCv'
                >
                    ¡Descargá mi CV!
                </a>
            </div>
            <div className='aboutMe-skills' >
                <h2>Mis Skills</h2>
                <div className='aboutMe-skills_container' >
                    {
                        skills.map(skill => (
                            <div key={skill.name} className='aboutMe-skills_item' >
                                <img src={skill.icon} alt={skill.name} className='aboutMe-skills_skillImg' />
                                <p className='skill-name' > {skill.name} </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default AboutMe;